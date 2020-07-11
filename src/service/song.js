import {request} from 'umi'


//获取歌词,传入歌曲id
export const getLyrics= (payload) =>{
    return request('http://localhost:3000/lyric',{
        method:'get',
        params:{
            id:payload
        }
    })
    .then(res=>{
        return res
    })
    .catch(err=>{
        console.log(err)
    })
  }
  
//获取热门歌曲评论,传入歌曲id，limit限制条数
// 0: 歌曲
// 1: mv
// 2: 歌单
// 3: 专辑
// 4: 电台
// 5: 视频
export const getComments= (payload) =>{
    return request('http://localhost:3000/comment/hot',{
        method:'get',
        params:{
            id:payload,
            limit:8,
            type:0
        }
    })
    .then(res=>{
        return res
    })
    .catch(err=>{
        console.log(err)
    })
  }

//获取歌曲详情,传入歌曲id
export const getMusicInfo= (payload) =>{
    return request('http://localhost:3000/song/detail',{
        method:'get',
        params:{
            ids:payload,
        }
    })
    .then(res=>{
        return res
    })
    .catch(err=>{
        console.log(err)
    })
  }

//通过歌曲详情的专辑id来获取歌曲封面
export const getAblumInfo= (payload) =>{
    return request('http://localhost:3000/album',{
        method:'get',
        params:{
            id:payload,   //专辑id
        }
    })
    .then(res=>{
        return res
    })
    .catch(err=>{
        console.log(err)
    })
  }


//相似歌曲
export const getSimilarMusic= (payload) =>{
    return request('http://localhost:3000/simi/song',{
        method:'get',
        params:{
            id:payload,
        }
    })
    .then(res=>{
        return res
    })
    .catch(err=>{
        console.log(err)
    })
  }

//歌曲url 传入歌曲id
export const getSongUrl= (payload) =>{
    return request('http://localhost:3000/song/url',{
        method:'get',
        params:{
            id:payload,
        }
    })
    .then(res=>{
        return res
    })
    .catch(err=>{
        console.log(err)
    })
  }

