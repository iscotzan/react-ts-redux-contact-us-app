// File - src/index.js

import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/style/hover.css";
import "./common/style/animate.css";
import "./index.css";
// Import store and history
import store, { history } from "./configureStore";

// common components
import Menus from "./common/containers/Menus/Menus";
import { Footer } from "./common/containers/Footer/Footer";

// routes
import routes from "./routes";

// Render App
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        <Menus />
        <div className="wrap">{routes}</div>
      <Footer />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
