import axios from 'axios'

export default {
  namespace: 'count',
  state: 0,
  reducers: {
    add  (count) { return count + 1 },
    minus(count) { return count - 1 },
  },
  effects: {
    *getList({  }, { call, put }) {
      const data = yield new Promise((resolve) => {
        axios.get('https://xxholic.github.io/lab/data/hemeraData.json').then((data) => {
          resolve(data);
        });
      })
      console.info('data',data);

      // put({
      //   type: 'save',
      //   payload: {
      //     data: 1
      //   },
      // });
    },
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