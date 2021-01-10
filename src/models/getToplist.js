/* eslint-disable import/no-anonymous-default-export */
import { getToplist } from '../service/getmock';

import { deepClone } from '../util/util';

export default {
  namespace: 'toplistinfo',
  state: {
    toplist: [],
    clickindex: 0,
    ranklist: {},
  },
  reducers: {
    getToplist(state, action) {
      const newstate = deepClone(state);
      newstate.toplist = action.payload;
      return newstate;
    },
    getranklist(state, action) {
      const newstate = deepClone(state);
      newstate.ranklist = action.payload;

      return newstate;
    },
    getClickindex(state, action) {
      const newstate = deepClone(state);
      action.payload
        ? (newstate.clickindex = action.payload)
        : (newstate.clickindex = state.clickindex);
      return newstate;
    },
  },
  effects: {
    *getToplistAsync({ payload }, { call, put }) {
      const result = yield call(getToplist, payload);

      yield put({
        type: 'getToplist',
        payload: result,
      });
    },
  },
};
