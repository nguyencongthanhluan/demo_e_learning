import React, { Component } from "react";
import CourseDetailScreen from "./screen/Detail";
import HomeScreen from "./screen/Home";
import SignUpScreen from "./screen/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import SigninScreen from "./screen/SignIn";
import { connect } from "react-redux";
import { createAction } from "./redux/actions";
import { FETCH_CREDENTIALS } from "./redux/actions/type";
// import {BrowserRouter,Route} from 'react-router-dom'; //Hổ trợ chia page cho ứng dụng
// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import Contact from './pages/Contact/Contact';
// import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //       <div>
      //           <Header />
      //           <Route exact path="/home" component={Home} />
      //           <Route exact path="/login" component={Login} />
      //           <Route exact path="/contact" component={Contact} />
      //           <Route exact path="/" component={Home} />

      //       </div>
      // </BrowserRouter>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/detail/:courseId" component={CourseDetailScreen} />
          <Route path="/signup" component={SignUpScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
  _getCredentialFromLocal = () => {
    const credentialsStr = localStorage.getItem("credentials");
    if (credentialsStr) {
      this.props.dispatch(
        createAction(FETCH_CREDENTIALS, JSON.parse(credentialsStr))
      );
    }
  };
  componentDidMount() {
    this._getCredentialFromLocal();
  }
}

export default connect()(App);
