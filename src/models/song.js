import {
    getMusicInfo, getAblumInfo, getSongUrl, getCommentsLength, getSongabout, getLyrics
} from '../service/song'
export default {
    namespace: 'songabout',
    state: {
        lyrics: '默认歌曲',
        comments: [],
        likelist: [],
        commentsLength: 0,
        musicInfo: { picUrl: "https://p2.music.126.net/_P62J8rc2wRIzoqIJGu2LA==/109951165120360797.jpg", singername: '', albmunname: '', albumid: "", albumPic: '', songname: '', songurl: 'http://m8.music.126.net/20200712152309/180b1b9c1bc76a2e0849a063f0752dca/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3153541938/f754/4321/df23/ff7cdcfd436b3312ddba6b140cd3cb2f.mp3' },
        similarMusic: [],
        clickmusicInfo: { picUrl: '', singername: '', albmunname: '', albumid: "", albumPic: '', songname: '', songurl: '' }
    },
    reducers: {
        getSongabout(state, action) {
            const newstate = deepClone(state);
            const result = action.payload
            newstate.lyrics = result.lyrics
            newstate.likelist = result.likelist
            newstate.comments = [...result.comments]
            newstate.similarMusic = [...result.similarMusic]
            return newstate
        },
        //获取评论长度
        getCommentsLength(state, action) {
            const newstate = deepClone(state);
            newstate.commentsLength = action.payload
            return newstate
        },
        //音乐详情
        getMusicInfo(state, action) {
            const newstate = deepClone(state);
            var originmusic = newstate.musicInfo
            newstate.musicInfo = { ...originmusic, ...action.payload }
            return newstate
        },
        //lyric
        getLyrics(state, action) {
            const newstate = deepClone(state);
            newstate.lyrics = action.payload
            return newstate
        },
    },
    effects: {
        //获取歌曲相关信息
        *getMusicAbout({ payload }, { call, put }) {
            var result = yield call(getSongabout, payload)
            if (result) {
                yield put({
                    type: 'getSongabout',
                    payload: result
                })
            }
        },
        //获取歌词
        *getLyricsAsync({ payload }, { call, put }) {
            const result = yield call(getLyrics, payload)
            if (result) {
                yield put({
                    type: 'getLyrics',
                    payload: result
                })
            }
        },
        //获取歌曲详情,以及歌曲封面，以及音乐url
        *getMusicInfoAsync({ payload }, { call, put }) {
            var newresult = yield call(getMusicInfo, payload)
            if (newresult.ar) {
                yield put({
                    type: 'getMusicInfo',
                    payload: {
                        singername: newresult.ar[0].name, singerid: newresult.ar[0].id, albmunname: newresult.al.name,
                        albumid: newresult.al.id, albumPic: newresult.al.picUrl, songname: newresult.name
                    },
                })
                //获取歌词
                yield put({
                    type: 'getLyricsAsync',
                    payload: payload
                })
                //获取歌曲评论长度
                const commensLength = yield call(getCommentsLength, payload)
                const albumResult = yield call(getAblumInfo, newresult.al.id)        //获取专辑信息来获取歌曲封面图片
                const songurl = yield call(getSongUrl, payload)                      //获取音乐url
                //获取音乐url
                if (albumResult) {
                    yield put({
                        type: 'getMusicInfo',
                        payload: { picUrl: albumResult.album.picUrl }
                    })
                }
                if (commensLength) {
                    yield put({
                        type: 'getCommentsLength',
                        payload: commensLength
                    })
                }
                if (songurl) {
                    yield put({
                        type: 'getMusicInfo',
                        payload: { songurl: songurl.data[0].url }
                    })
                }
            }
        },
    }

}
function deepClone(obj) {
    let newobj = JSON.stringify(obj),
        currentObj = JSON.parse(newobj);
    return currentObj
}