import {request} from 'umi'
import {arrayExchange} from '../util/util'

export const getSongabout =(payload)=>{
    //传入musicid获取歌词
    var getLyrics=new Promise((resolve,reject)=>{
        return request('http://localhost:3000/lyric',{
            method:'get',
            params:{
                id:payload.musicid
            }
        })
        .then(res=>{
            resolve({lyrics:res.lrc.lyric})
        })
        .catch(err=>{
            reject(err)
        })
    })
    //获取热门歌曲评论,传入歌曲id，limit限制条数0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频
    var getComments=new Promise((resolve,reject)=>{
        return request('http://localhost:3000/comment/hot',{
            method:'get',
            params:{
                id:payload.musicid,
                limit:8,
                type:0
            }
        })
        .then(res=>{
            resolve({comments:res.hotComments})
        })
        .catch(err=>{
            reject(err)
        })
    })
    // 传入用户id获取用户喜欢歌单
    var getUserLikelist=new Promise((resolve,reject)=>{
        return request('http://localhost:3000/likelist',{
            method:'get',
            params:{
                uid:payload.currenuserid,
            }
        })
        .then(res=>{
              return  Promise.all(res.ids.map(item=>{
                    return request('http://localhost:3000/song/detail',{
                        method:'get',
                        params:{
                            ids:item,
                        }
                    })
                    .then(res=>{
                       return res.songs[0]
                    })
                }))
                .then(final=>{
                    resolve({likelist:final})
                })
                .catch(err=>{
                    console.log(err);
                })
    
        })
        .catch(err=>{
            reject(err);
        })
    })
    //传入歌曲id获取相似歌曲
    var getSimilarMusic=new Promise((resolve,reject)=>{
        return request('http://localhost:3000/simi/song',{
            method:'get',
            params:{
                id:payload.musicid,
            }
        })
        .then(res=>{
            resolve( {similarMusic:res.songs})
        })
        .catch(err=>{
            reject(err)
        })
    })
    return Promise.all([getLyrics,getComments,getSimilarMusic,getUserLikelist].map(p=>p.catch(err=>err)))
                .then(res=>{
                    console.log(arrayExchange(res));
                    return arrayExchange(res)
                })
                .catch(err=>{
                    console.log(err);
                })
}

//获取评论数量
export const getCommentsLength= (payload) =>{
    return request('http://localhost:3000/comment/music',{
        method:'get',
        params:{
            id:payload,
        }
    })
    .then(res=>{
        return res.total
    })
    .catch(err=>{
        console.log(err)
    })
  }

//获取用户歌单
export const getUserPlaylist= (payload) =>{
    return request('http://localhost:3000/user/playlist',{
        method:'get',
        params:{
            uid:payload,
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
        return res.songs[0]
    })
    .catch(err=>{
        console.log(err)
    })
  }
//   获取歌词
  export const getLyrics= (payload) =>{
    return request('http://localhost:3000/lyric',{
        method:'get',
        params:{
            id:payload
        }
    })
    .then(res=>{
        return res.lrc.lyric
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

