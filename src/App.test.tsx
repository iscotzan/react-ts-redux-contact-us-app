import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./containers/Hello";
import { Provider } from "react-redux";
import store from "./configureStore";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
