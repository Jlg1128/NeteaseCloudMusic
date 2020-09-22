import { request } from '../util/request';
import { arrayExchange } from '../util/util';

const api = {
  getLyrics: `/lyric`, //传入musicid获取歌词
  //获取热门歌曲评论,传入歌曲id，limit限制条数0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频
  getComments: `/comment/hot`,
  getUserLikelist: `/likelist`, // 传入用户id获取用户喜欢歌单
  songdetail: `/detail`, //歌曲详情
  getSimilarMusic: `/simi/song`, //相似歌曲
  getCommentsLength: `/comment/music`, //评论长度
  getUserPlaylist: `/user/playlist`, //获取用户歌单
  getMusicInfo: `/song/detail`, //获取歌曲详情,传入歌曲id
  getAblumInfo: `/album`, //通过歌曲详情的专辑id来获取歌曲封面
  getSongUrl: `/song/url`, //歌曲url 传入歌曲id
  submitComment: `/comment`, //提交评论
  getThreadId: `/user/event`, //获取ThreadId
  reply: `/comment`, //回复动态评论
  clicklike: `/comment/like`, //点赞
};

export const getSongabout = payload => {
  //传入musicid获取歌词
  var getLyrics = new Promise((resolve, reject) => {
    return request(api.getLyrics, {
      method: 'get',
      params: {
        id: payload.musicid,
      },
    })
      .then(res => {
        resolve({ lyrics: res.data.lrc.lyric });
      })
      .catch(err => {
        reject(err);
      });
  });
  //获取热门歌曲评论,传入歌曲id，limit限制条数0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频
  var getComments = new Promise((resolve, reject) => {
    return request(api.getComments, {
      method: 'get',
      params: {
        id: payload.musicid,
        limit: 8,
        type: 0,
      },
    })
      .then(res => {
        console.log(res);
        resolve({ comments: res.data.hotComments });
      })
      .catch(err => {
        reject(err);
      });
  });
  // 传入用户id获取用户喜欢歌单
  var getUserLikelist = new Promise((resolve, reject) => {
    return request(api.getUserLikelist, {
      method: 'get',
      params: {
        uid: payload.currenuserid,
      },
    })
      .then(res => {
        console.log(res);
        return Promise.all(
          res.ids.map(item => {
            return request(api.songdetail, {
              method: 'get',
              params: {
                ids: item,
              },
            }).then(res => {
              console.log(res);
              return res.data.songs[0];
            });
          }),
        )
          .then(final => {
            resolve({ likelist: final });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        reject(err);
      });
  });
  //传入歌曲id获取相似歌曲
  var getSimilarMusic = new Promise((resolve, reject) => {
    return request(api.getSimilarMusic, {
      method: 'get',
      params: {
        id: payload.musicid,
      },
    })
      .then(res => {
        console.log(res);
        resolve({ similarMusic: res.data.songs });
      })
      .catch(err => {
        reject(err);
      });
  });
  return Promise.all(
    [getLyrics, getComments, getSimilarMusic, getUserLikelist].map(p =>
      p.catch(err => err),
    ),
  )
    .then(res => {
      console.log(res);
      console.log(arrayExchange(res));
      return arrayExchange(res);
    })
    .catch(err => {
      console.log(err);
    });
};

//获取评论数量
export const getCommentsLength = payload => {
  return request(api.getCommentsLength, {
    method: 'get',
    params: {
      id: payload,
    },
  })
    .then(res => {
      console.log(res);
      return res.data.total;
    })
    .catch(err => {
      console.log(err);
    });
};

//获取用户歌单
export const getUserPlaylist = payload => {
  return request(api.getUserPlaylist, {
    method: 'get',
    params: {
      uid: payload,
    },
  })
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

//获取歌曲详情,传入歌曲id
export const getMusicInfo = payload => {
  return request(api.getMusicInfo, {
    method: 'get',
    params: {
      ids: payload,
    },
  })
    .then(res => {
      console.log(res);
      return res.data.songs[0];
    })
    .catch(err => {
      console.log(err);
    });
};
//   获取歌词
export const getLyrics = payload => {
  return request(api.getLyrics, {
    method: 'get',
    params: {
      id: payload,
    },
  })
    .then(res => {
      console.log(res);
      return res.data.lrc.lyric;
    })
    .catch(err => {
      console.log(err);
    });
};
//通过歌曲详情的专辑id来获取歌曲封面
export const getAblumInfo = payload => {
  return request(api.getAblumInfo, {
    method: 'get',
    params: {
      id: payload, //专辑id
    },
  })
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

//歌曲url 传入歌曲id
export const getSongUrl = payload => {
  return request(api.getSongUrl, {
    method: 'get',
    params: {
      id: payload,
    },
  })
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

//提交评论
export const submitComment = ({ id, content, commentId }) => {
  return request(api.submitComment, {
    method: 'post',
    params: {
      t: '1',
      type: '0',
      id, //歌曲id
      content,
      commentId, //userid
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {});
};
//获取ThreadId
function getThreadId(targetid, time) {
  return request(api.getThreadId, {
    method: 'get',
    params: {
      uid: targetid,
    },
  }).then(res => {
    let result = res.data.events.filter(item => {
      item.eventTime != time;
    });
    let { threadId } = result[0].info;
    return threadId;
  });
}
//回复动态评论
export const reply = ({ targetid, id, content, commentId, time }) => {
  return request(api.reply, {
    method: 'get',
    params: {
      t: 2,
      type: 6,
      id, //歌曲id
      content,
      commentId, //userid
    },
  })
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
//点赞
export const clicklike = ({ targetid, id, content, commentId, time }) => {
  // let threadId = getThreadId(targetid,time)
  console.log(id);
  return request(api.clicklike, {
    method: 'get',
    params: {
      t: 1,
      type: 0,
      cid: id, //歌曲id
      id: targetid, //评论id
    },
  })
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
