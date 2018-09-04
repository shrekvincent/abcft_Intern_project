import React, {Component} from 'react';
// 头部导航 有三个组件分别为NavSubsite,NavNine,NavLogMessage
import NavSubsite from './NavSubsite';
import NavNine from './NavNine';
import NavLogMessage from './NavLogMessage';

import '../css/analystai.css';

class Nav extends Component {
  render() {
    return (
      <div className="main-nav">
        <NavSubsite />
        <NavNine />
        <NavLogMessage />
      </div>
    );
  }
}

export default Nav;