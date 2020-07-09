import { getmusicinfo } from '../service/getmock'
import { getRecommendMusic, getHotJoinedSinger, getHotZhubolist, getNewestAblum, gettoplisthot, gettoplistnewest, gettoplistorigin, getIndexSwiper } from '../service/servers'
export default {
    namespace: 'recommend',
    state: {
        dailyrecommendmusic: [],
        HotJoinedSinger: [],
        HotZhubo: [],
        joinedsinger: [],
        NewestAblum: [],
        toplisthot: [],
        toplistnewest: [],
        toplisthotorigin: [],
        IndexSwiper: [],
        visible: false,
        registervisible:false,
        currentindex: 0
    },
    reducers: {
        //获取首页轮播图
        getindexswiper(state, action) {
            const newstate = deepClone(state)
            newstate.IndexSwiper = [...action.payload]
            return newstate
        },
        //首页推荐音乐
        getDailyRecommendMusic(state, action) {
            const newstate = deepClone(state)
            newstate.dailyrecommendmusic = [...action.payload]
            return newstate
        },
        //获取入住热门歌手
        getHotJoinedSinger(state, action) {
            const newstate = deepClone(state)
            newstate.HotJoinedSinger = [...action.payload]
            return newstate
        },
        //获取热门主播
        getHotZhubo(state, action) {
            const newstate = deepClone(state)
            newstate.HotZhubo = [...action.payload]
            return newstate
        },
        //获取新碟上架
        getNewestAblum(state, action) {
            const newstate = deepClone(state)
            newstate.NewestAblum = [...action.payload]
            return newstate
        },
        //获取飙升榜
        gettoplisthot(state, action) {
            const newstate = deepClone(state)
            newstate.toplisthot = [...action.payload]
            return newstate
        },
        //获取新歌榜
        gettoplistnewest(state, action) {
            const newstate = deepClone(state)
            newstate.toplistnewest = [...action.payload]
            return newstate
        },
        //获取原创榜
        gettoplisthotorigin(state, action) {
            const newstate = deepClone(state)
            newstate.toplisthotorigin = [...action.payload]
            return newstate
        },
        //设置登录方式弹窗
        setVisible(state, action) {
            const newstate = deepClone(state);
            newstate.visible = action.payload
            return newstate
        },

        //设置注册方式弹窗
        setRegisterVisible(state, action) {
            const newstate = deepClone(state);
            newstate.registervisible = action.payload
            return newstate
        },
        getindex(state, action) {
            const newstate = deepClone(state);
            newstate.currentindex = action.payload
            return newstate
        },
    },
    effects: {
        //获取首页推荐音乐
        *AsyncgetDailyRecommendMusic({ payload }, { call, put }) {
            const resultindexswiper = yield call(getIndexSwiper, payload)
            const resultrec = yield call(getRecommendMusic, payload)
            const resulthotjoined = yield call(getHotJoinedSinger, payload)
            const resulthotzhubo = yield call(getHotZhubolist, payload)
            const resultnewestAblum = yield call(getNewestAblum, payload)
            const resulttoplisthot = yield call(gettoplisthot, payload)
            const resulttoplistnewest = yield call(gettoplistnewest, payload)
            const resulttoplistorigin = yield call(gettoplistorigin, payload)
            yield put({
                type: 'getindexswiper',
                payload: resultindexswiper.banners
            })
            yield put({
                type: 'getDailyRecommendMusic',
                payload: resultrec.result.slice(0, 8)
            })
            yield put({
                type: 'getHotJoinedSinger',
                payload: resulthotjoined.artists
            })
            yield put({
                type: 'getHotZhubo',
                payload: resulthotzhubo.data.list
            })
            yield put({
                type: 'getNewestAblum',
                payload: resultnewestAblum.albums
            })
            yield put({
                type: 'gettoplisthot',
                payload: resulttoplisthot.playlist.tracks.slice(0, 10)
            })
            yield put({
                type: 'gettoplistnewest',
                payload: resulttoplistnewest.playlist.tracks.slice(0, 10)
            })
            yield put({
                type: 'gettoplisthotorigin',
                payload: resulttoplistorigin.playlist.tracks.slice(0, 10)
            })
        },
    }
}
function deepClone(obj) {
    let newobj = JSON.stringify(obj),
        currentObj = JSON.parse(newobj);
    return currentObj
}