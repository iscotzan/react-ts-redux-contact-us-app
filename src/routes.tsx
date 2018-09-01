// File - src/routes.js

import * as React from "react";
import { Route, Switch } from 'react-router';
 
// Module root components
// import Catalog from './catalog';
// import Product from './product';
// import Archives from './archives';
import {PageNotFound} from './common/components/PageNotFound/PageNotFound';
import ContactUsForm from "./containers/ContactUsForm";
import Home from "./containers/Home/Home";

export default (
  <Switch>
    <Route exact path="/contact" component={ContactUsForm}/>
    {/* <Route exact path="/contact" component={ContactUsForm}/> */}
    {/* <Route exact path="/product/:productId" component={Product}></Route>
    <Route exact path="/designers" component={Designers}/>
    <Route exact path="/articles" component={Archives}/>
    <Route exact path="/articles/category/:slug" component={Archives}/> */}
    <Route exact path="/" component={Home}/>
    <Route path="*" component={PageNotFound} />
  </Switch>
);