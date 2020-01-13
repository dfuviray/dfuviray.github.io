import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize";
import Socials from "./socials";
import Menu from "./menu";
import logo from "../images/logo.svg";

class Sidebar extends Component {
  componentDidMount() {
    var elem = document.querySelector("#mobile-menu");
    var instance = M.Sidenav.init(elem, {});
  }

  render() {
    return (
      // <div className="navbar">
      <div className="navbar-wrapper">
        <nav className="white z-depth-0 hide-on-large-only">
          <div class="container">
            <a href="" class="brand-logo center">
              <img src={logo} />
            </a>
            <a
              href="#"
              class="sidenav-trigger hide-on-large-only black-text"
              data-target="mobile-menu"
            >
              <i class="material-icons">menu</i>
            </a>
          </div>
        </nav>

        <div id="mobile-menu" className="sidenav sidenav-fixed">
          <div className="row logo">
            <img src={logo} className="col s4 offset-s4 responsive-img" />
          </div>
          <Socials />
          <Menu />
        </div>
      </div>
      // </div>
    );
  }
}

export default Sidebar;
