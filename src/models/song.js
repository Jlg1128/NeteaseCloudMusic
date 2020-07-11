import {getLyrics,getComments,getMusicInfo,getSimilarMusic,getAblumInfo,getSongUrl} from '../service/song'
export default {
        namespace:'songabout',
        state:{
            lyrics:'默认歌曲',
            comments:[],
            // picUrl:"http://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg",name:'默认歌曲'
            musicInfo:{picUrl:'',singername:'',albmunname:'',albumid:"",albumPic:'' ,songname:'',songurl:''},
            similarMusic:[],
    },
        reducers:{
            //歌词
            getLyrics(state,action){
               const newstate = deepClone(state);
               newstate.lyrics=action.payload
               return newstate
            },
            //评论
            getComments(state,action){
                const newstate = deepClone(state);
                newstate.comments=[...action.payload]
                return newstate
             },
            //音乐详情
            getMusicInfo(state,action){
                const newstate = deepClone(state);
                var originmusic = newstate.musicInfo
                newstate.musicInfo={...originmusic, ...action.payload}
                return newstate
             },
            //相似歌曲
            getSimilarMusic(state,action){
                const newstate = deepClone(state);
                newstate.similarMusic=[...action.payload]
                return newstate
             },

        },
    effects:{
            //获取歌词
           *getLyricsAsync({payload},{call,put}){
                const result =yield call(getLyrics,payload)
                if(result.lrc){
                    var lyrics = result.lrc.lyric
                    yield put({
                        type:'getLyrics',
                        payload:lyrics
                    })
                }
            },
            //获取评论
            *getCommentsAsync({payload},{call,put}){
                const result =yield call(getComments,payload)
                if(result){
                    yield put({
                        type:'getComments',
                        payload:result.hotComments
                    })
                }
            },
            //获取歌曲详情,以及歌曲封面，以及音乐url
            *getMusicInfoAsync({payload},{call,put}){
                var  result =yield call(getMusicInfo,payload)
                if(result.songs[0].ar){
                    var newresult = result.songs[0]
                    yield put({
                        type:'getMusicInfo',
                        payload:{singername:newresult.ar[0].name,singerid:newresult.ar[0].id,albmunname:newresult.al.name,
                                  albumid:newresult.al.id,albumPic:newresult.al.picUrl,songname:newresult.name},
                    })
                    const albumResult =yield call(getAblumInfo,newresult.al.id)        //获取专辑信息来获取歌曲封面图片
                    const songurl = yield call(getSongUrl,payload)                      //获取音乐url
                    if(albumResult){
                        yield put({
                            type:'getMusicInfo',
                            payload:{picUrl:albumResult.album.picUrl}
                        })
                    }
                    if(songurl){
                        yield put({
                            type:'getMusicInfo',
                            payload:{songurl:songurl.data[0].url}
                        })
                    }
                }
            },
            //获取相似歌曲    
            *getSimilarMusicAsync({payload},{call,put}){
                const result =yield call(getSimilarMusic,payload)
                if(result){
                    yield put({
                        type:'getSimilarMusic',
                        payload:result.songs
                    })
                }
            },
     }}
function deepClone(obj){
    let newobj=JSON.stringify(obj),
        currentObj=JSON.parse(newobj);
    return currentObj
}