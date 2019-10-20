import count from '../client/models/count'

export default [
  count,
  {
    namespace: 'ssr',
    state: {
      env: null,
    },
  }
];

