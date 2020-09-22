import { getRecommendMusicInfo } from '../service/servers';
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
    registervisible: false,
    clickindex: 0,
  },
  reducers: {
    getRecommendMusicInfo(state, action) {
      const newstate = deepClone(state);
      const result = action.payload;
      newstate.IndexSwiper = [...result.IndexSwiper];
      newstate.dailyrecommendmusic = [...result.dailyrecommendmusic];
      newstate.HotJoinedSinger = [...result.HotJoinedSinger];
      newstate.HotZhubo = [...result.HotZhubo];
      newstate.NewestAblum = [...result.NewestAblum];
      // newstate.toplisthot = [...result.toplisthot]
      // newstate.toplistnewest = [...result.toplistnewest]
      // newstate.toplisthotorigin = [...result.toplisthotorigin]

      return newstate;
    },
    //设置登录方式弹窗
    setVisible(state, action) {
      const newstate = deepClone(state);
      newstate.visible = action.payload;
      return newstate;
    },

    //设置注册方式弹窗
    setRegisterVisible(state, action) {
      const newstate = deepClone(state);
      newstate.registervisible = action.payload;
      return newstate;
    },
    setclickindex(state, action) {
      const newstate = deepClone(state);
      newstate.clickindex = action.payload;
      return newstate;
    },
  },
  effects: {
    //获取首页推荐音乐
    *AsyncgetDailyRecommendMusic({ payload }, { call, put }) {
      const result = yield call(getRecommendMusicInfo, payload);
      console.log(result);
      if (result) {
        console.log(result);
        yield put({
          type: 'getRecommendMusicInfo',
          payload: result,
        });
      }
    },
  },
};
function deepClone(obj) {
  let newobj = JSON.stringify(obj),
    currentObj = JSON.parse(newobj);
  return currentObj;
}
