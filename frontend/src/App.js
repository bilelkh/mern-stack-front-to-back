import React, { Fragment,useEffect } from "react";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./layout/Alert";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
if(localStorage.token){
  setAuthToken(localStorage.token)
}
const App = () => {
  useEffect(() => {
     store.dispatch(loadUser())
  }, [])  
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route path="/register" component={Register}></Route>
              <Route path="/login" component={Login}></Route>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
