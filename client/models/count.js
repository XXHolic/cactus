export default {
  namespace: 'count',
  state: {
    data: 1
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *add({ payload: {  } }, { call, put }) {
      debugger;
      yield put({
        type: 'save',
        payload: {
          data: 1
        },
      });
    },
    *minus({}, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          data: -1
        },
      });
    },

  },
};