export default {
  namespace: 'count',
  state: 0,
  reducers: {
    add  (count) { return count + 1 },
    minus(count) { return count - 1 },
  },
  effects: {
    // *add({ payload: {  } }, { call, put }) {
    //   yield put({
    //     type: 'save',
    //     payload: {
    //       data: 1
    //     },
    //   });
    // },
    // *minus({}, { call, put }) {
    //   yield put({
    //     type: 'save',
    //     payload: {
    //       data: -1
    //     },
    //   });
    // },

  },
};