import { request } from '../util/request';
import { arrayExchange } from '../util/util';

//首页相关api，以及用户登录状态api
const api = {
  banner: `/banner`,
  recommendMusic: `/personalized/newsong`,
  hotJoinedSinger: `/top/artists`,
  HotZhubolist: `/dj/toplist/newcomer`,
  NewestAblum: `/top/album`,
  handelSearch: `/search/suggest`,

  userlogin: `/login/cellphone`,
  userlogstatus: `/login/status`,
  userdetail: `/user/detail`,
};

export const getRecommendMusicInfo = () => {
  //首页轮播图
  var getIndexSwiper = new Promise((resolve, reject) => {
    return request(api.banner)
      .then(res => {
        console.log(res);
        resolve({ IndexSwiper: res.data.banners });
      })
      .catch(err => reject(err));
  });
  //热门推荐
  var getRecommendMusic = new Promise((resolve, reject) => {
    return request(api.recommendMusic)
      .then(res => {
        console.log(res);
        resolve({ dailyrecommendmusic: res.data.result.slice(0, 8) });
      })
      .catch(err => reject(err));
  });
  //获取入住热门歌手
  var getHotJoinedSinger = new Promise((resolve, reject) => {
    return request(api.hotJoinedSinger, {
      method: 'get',
      params: {
        limit: 5,
      },
    })
      .then(res => {
        console.log(res);
        resolve({ HotJoinedSinger: res.data.artists });
      })
      .catch(err => reject(err));
  });
  //获取热门主播
  var getHotZhubolist = new Promise((resolve, reject) => {
    return request(api.HotZhubolist, {
      method: 'get',
      params: {
        limit: 5,
      },
    })
      .then(res => {
        console.log(res);
        resolve({ HotZhubo: res.data.data.list });
      })
      .catch(err => reject(err));
  });
  //新碟上架
  var getNewestAblum = new Promise((resolve, reject) => {
    return request(api.NewestAblum, {
      method: 'get',
      params: {
        limit: 5,
      },
    })
      .then(res => {
        console.log(res);
        resolve({ NewestAblum: res.data.albums });
      })
      .catch(err => reject(err));
  });
  /**
   * 接口失效
   */

  //飙升榜
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
  //首页榜单-原创榜
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
  return request(api.userlogin, {
    method: 'get',
    credentials: 'include',
    params: {
      phone: payload.phone,
      password: payload.password,
    },
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return { code: 502 };
    });
};

//获取用户登录状态
export const getuserlogstatus = payload => {
  return request(api.userlogstatus);
};

//登录获取用户详情,传入用户id
export const userdetail = uid => {
  return request(api.userdetail, {
    method: 'get',
    params: {
      uid,
    },
  });
};
//搜索关键字提示
export const handelSearch = keywords => {
  return request(api.handelSearch, {
    method: 'get',
    params: {
      keywords,
    },
  })
    .then(res => {
      return res.data.result;
    })
    .catch(err => {
      console.log(err);
    });
};
