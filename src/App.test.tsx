import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store, { history } from "./configureStore";
import { ConnectedRouter } from "react-router-redux";

// common components
import Menus from "./common/containers/Menus/Menus";
import { Footer } from "./common/containers/Footer/Footer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <Menus />
          <a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md">
            Routes rendering already well tested by react-router
          </a>
          <Footer />
        </div>
      </ConnectedRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
