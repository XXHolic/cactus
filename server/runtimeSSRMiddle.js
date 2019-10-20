
import render from './render';

export default function runtimeSSRMiddle({
  routes, renderFullPage, createApp, initialState, onRenderSuccess, models
}) {
  return async (req, res, next) => {
    // const isMobile = !!new MobileDetect(req.headers['user-agent']).mobile();
    try {
    const result = await render({
      url: req.url,
      env: { platform: 'pc' },
      routes,
      renderFullPage,
      createApp,
      initialState,
      onRenderSuccess,
      models
    });
    switch (result.code) {
      case 200:
        return res.end(result.html);
      case 302:
        return res.redirect(302, result.redirect);
      case 404:
        next();
        break;
      case 500:
        next(result.error);
        break;
      default:
        next();
        break;
    }

  } catch(err) {
    console.log(`render error`, err);
  }
  };
}
