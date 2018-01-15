import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';


class Navbar extends Component {
  constructor(props){
        super(props);

        this.state = {
            demoIndex: 0
        };
  }
  componentDidMount(){
    
  }
  render() {
    return (
          <footer>
            <div className="footer">
              <NavLink to="/" className="footer-tab index" activeClassName="current" exact>
                <div className="footer-tab-icon"></div>
                <div>主页</div>
              </NavLink>
              <NavLink to="/store" className="footer-tab store" activeClassName="current">
                <div className="footer-tab-icon"></div>
                <div>门店</div>
              </NavLink>
              <NavLink to="/user" className="footer-tab my" activeClassName="current">
                <div className="footer-tab-icon"></div>
                <div>我的</div>
              </NavLink>
            </div>
          </footer>
    );
  }
}

export default Navbar;
