import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import classes from "./style.module.css";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-4">
        <a className="navbar-brand" href="#">
          <img src={Logo} className={classes.logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "red" }}
                to="/"
                exact
                className="nav-link"
              >
                Trang Chủ
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            {this.props.credentials ? (
              <li className="nav-item">
                <span className="nav-link">
                  Hi, {this.props.credentials.hoTen}
                </span>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "red" }}
                    to="/signup"
                    className="nav-link"
                  >
                    Đăng Ký
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeStyle={{ color: "red" }}
                    to="/signin"
                    className="nav-link"
                  >
                    Đăng Nhập
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    credentials: state.user.credentials,
  };
};

export default connect(mapStateToProps)(Header);
