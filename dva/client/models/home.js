import axios from 'axios'
const state = {
  homeData:{}
};

export default {
  namespace: 'home',
  state: state,
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
    },

  },
};