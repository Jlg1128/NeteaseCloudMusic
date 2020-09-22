import { request } from 'umi';
import { arrayExchange } from '../util/util';

export const getRecommendMusicInfo = () => {
  //首页轮播图
  var getIndexSwiper = new Promise((resolve, reject) => {
    return request('http://localhost:3000/banner')
      .then(res => {
        resolve({ IndexSwiper: res.banners });
      })
      .catch(err => reject(err));
  });
  //热门推荐
  var getRecommendMusic = new Promise((resolve, reject) => {
    return request('http://localhost:3000/personalized/newsong')
      .then(res => resolve({ dailyrecommendmusic: res.result.slice(0, 8) }))
      .catch(err => reject(err));
  });
  //获取入住热门歌手
  var getHotJoinedSinger = new Promise((resolve, reject) => {
    return request('http://localhost:3000/top/artists', {
      method: 'get',
      params: {
        limit: 5,
      },
    })
      .then(res => resolve({ HotJoinedSinger: res.artists }))
      .catch(err => reject(err));
  });
  //获取热门主播
  var getHotZhubolist = new Promise((resolve, reject) => {
    return request('http://localhost:3000/dj/toplist/newcomer', {
      method: 'get',
      params: {
        limit: 5,
      },
    })
      .then(res => resolve({ HotZhubo: res.data.list }))
      .catch(err => reject(err));
  });
  //新碟上架
  var getNewestAblum = new Promise((resolve, reject) => {
    return request('http://localhost:3000/top/album', {
      method: 'get',
      params: {
        limit: 5,
      },
    })
      .then(res => resolve({ NewestAblum: res.albums }))
      .catch(err => reject(err));
  });
  // //飙升榜
  // var gettoplisthot = new Promise((resolve, reject) => {
  //   return request('http://localhost:3000/top/list', {
  //     method: "get",
  //     params: {
  //       idx: 3
  //     }
  //   }
  //   )
  //     .then(res => resolve({toplisthot:res.playlist.tracks.slice(0, 10)}))
  //     .catch(err => reject(err))
  // })
  //首页榜单-新歌榜
  // var gettoplistnewest = new Promise((resolve, reject) => {
  //   return request('http://localhost:3000/top/list', {
  //     method: "get",
  //     params: {
  //       idx: 0,
  //     }
  //   }
  //   )
  //     .then(res => resolve({toplistnewest:res.playlist.tracks.slice(0, 10)}))
  //     .catch(err => reject(err))
  // })
  // //首页榜单-原创榜
  // var gettoplistorigin = new Promise((resolve, reject) => {
  //   return request('http://localhost:3000/top/list', {
  //     method: "get",
  //     params: {
  //       idx: 2
  //     }
  //   }
  //   )
  //     .then(res => resolve({toplisthotorigin:res.playlist.tracks.slice(0, 10)}))
  //     .catch(err => reject(err))
  // })
  //,gettoplisthot,gettoplistnewest,gettoplistorigin 三个接口不能用了
  return Promise.all([
    getIndexSwiper,
    getRecommendMusic,
    getHotJoinedSinger,
    getHotZhubolist,
    getNewestAblum,
  ])
    .then(res => {
      let final = arrayExchange(res);
      console.log(final);
      return final;
    })
    .catch(err => {
      console.log(err);
    });
};

//用户登录
export const userlog = payload => {
  return request('http://localhost:3000/login/cellphone', {
    method: 'get',
    credentials: 'include',
    params: {
      phone: payload.phone,
      password: payload.password,
    },
  })
    .then(res => {
      return res;
    })
    .catch(err => {
      return { code: 502 };
    });
};

//获取用户登录状态
export const getuserlogstatus = payload => {
  return request('http://localhost:3000/login/status');
};

//登录获取用户详情,传入用户id
export const userdetail = uid => {
  return request('http://localhost:3000/user/detail', {
    method: 'get',
    params: {
      uid,
    },
  });
};
//搜索关键字提示
export const handelSearch = keywords => {
  return request('http://localhost:3000/search/suggest', {
    method: 'get',
    params: {
      keywords,
    },
  })
    .then(res => {
      return res.result;
    })
    .catch(err => {
      console.log(err);
    });
};
