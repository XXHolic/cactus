import dva from "dva";
import { createBrowserHistory } from 'dva';
const history = createBrowserHistory();
//
// 1. Initialize
debugger;
const app = dva({
  history: history,
  initialState: window.__INITIAL_STATE__
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require("./models/home").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
