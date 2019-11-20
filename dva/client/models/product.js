import axios from 'axios'
const state = {
  data:[
    {name:'商品1'},
    {name:'商品2'},
    {name:'商品3'},
  ]
};

export default {
  namespace: 'product',
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