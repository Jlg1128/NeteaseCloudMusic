import { request } from 'umi';

//获取首页轮播图
export const getIndexSwiper = () =>{
  return request('http://localhost:3000/banner')
}



//获取首页热门推荐音乐
export const getRecommendMusic = () =>{
  return request('http://localhost:3000/personalized/newsong')
}

//获取入住热门歌手
export const getHotJoinedSinger = () =>{
  return request('http://localhost:3000/top/artists',{
    method:"get",
    params:{
      limit:5
    }
  }
  )
}

//获取热门主播
export const getHotZhubolist = () =>{
  return request('http://localhost:3000/dj/toplist/newcomer',{
    method:"get",
    params:{
      limit:5
    }
  }
  )
}

//新碟上架
export const getNewestAblum = () =>{
  return request('http://localhost:3000/top/album',{
    method:"get",
    params:{
      limit:5
    }
  }
  )
}


//首页榜单-飙升榜
export const gettoplisthot = () =>{
  return request('http://localhost:3000/top/list',{
    method:"get",
    params:{
      idx:3
    }
  }
  )
}

//首页榜单-新歌榜
export const gettoplistnewest = () =>{
  return request('http://localhost:3000/top/list',{
    method:"get",
    params:{
      idx:0,
    }
  }
  )
}

//首页榜单-原创榜
export const gettoplistorigin = () =>{
  return request('http://localhost:3000/top/list',{
    method:"get",
    params:{
      idx:2
    }
  }
  )
}


//用户登录
export const userlog = (payload) =>{
  return request('http://localhost:3000/login/cellphone',{
    method:"get",
    credentials:'include',
    params:{
      phone:payload.phone,
      password:payload.password
    }
  })
  .then(res=>{
    return res
  })
  .catch(err=>{
    return {code:502}
  })
}



//获取用户登录状态
export const getuserlogstatus = (payload) =>{
  return request('http://localhost:3000/login/status')
}

//登录获取用户详情,传入用户id
export const userdetail = (uid) =>{
  return request('http://localhost:3000/user/detail',{
    method:"get",
    params:{
      uid
    }
  }
  )
}
