import Count from '../client/routes/Count';
import NotFound from '../client/components/NotFound/index';

export const routes = [
    {
      path: '/',
      component: Count,
      exact: true,
      loadData: {},
      key: 'count',
      header: [
        {title: '计数器'},
        {ele: 'meta',name:'author',content: 'thy'},
      ]
    },
    // {
    //   component: NotFound,
    //   key: 'not fond',
    //   header: {
    //     title: '没有找到'
    //   }
    // }
];