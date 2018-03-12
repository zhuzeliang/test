import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';


class Navbar extends Component {
  constructor(props){
        super(props);

        this.state = {
            demoIndex: 0,
            appid:this.props.appid
        };
  }
  componentDidMount(){
      console.log(this.props.appid)
  }
  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      this.setState({
        appid:nextProps.appid
      })
  }
  father(){
    console.log(this.props.handleAdd)
  }
  render() {
    return (
          <footer>
            <div className="footer">
              <NavLink to="/" className="footer-tab index" activeClassName="current" exact>
                <div className="footer-tab-icon"></div>
                <div>主页{this.state.appid}</div>
              </NavLink>
              <div onClick = {this.props.handleAdd}>66666666666666666666</div>
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
