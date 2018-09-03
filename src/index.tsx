// File - src/index.js

import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/style/hover.css";
import "./common/style/animate.css";
import "./index.css";
import ReduxToastr from "react-redux-toastr";

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
        <ReduxToastr
          timeOut={4000}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
