import React, { Component } from 'react';
import loginOne from "../img/login-one.png";
import '../css/nav.css';
import '../css/analystai.css';
import picOne from '../img/账号信息.png';
import picTwo from '../img/我的收藏.png';
import picThree from '../img/搜索历史.png';
import picFour from '../img/我的文件.png';
import picFive from '../img/退出登录.png';

// import '../img';
// NavLogMessage部分
class NavLogMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayStyle: 'none',
    }
  }
  componentDidMount() {
    document.addEventListener('click', this.handleMouseUp, false);
  }
  handleMouseUp = (event) => {
    console.log('ceshi!!');
    this.setState({
      displayStyle: 'none'
    })
  }
  handleClick = (event) => {
    // event.nativeEvent.stopImmediatePropagation();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    if (this.state.displayStyle === "none") {
      document.getElementById('popOutOneShow').style.display = 'none';
      this.setState({
        displayStyle: 'block'
      })
    } else {
      this.setState({
        displayStyle: 'none'
      })
    }
  };
  render() {
    return (
      <div className="main-nav-btn">
        <div className="loginUserTag" onClick={this.handleClick.bind(this)}>
          <span>
            <img src={loginOne} alt="" width="20px" height="20px" className="main-menu-btn-twoPart" />
          </span>
          <span className="loginUserInf">test3@abcft.comffff</span>
        </div>
        <PopOutTwo displayStyle={this.state.displayStyle} />
        {/* <div id="popOutTwo" style={{display:'block',top:'39px',right:'4px'}}>
          <LoginHeadMessage />
          <LoginMessageList list={loginData} />
        </div> */}
      </div>
    );
  }
}

class PopOutTwo extends Component {
  handleClick = event => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }
  render() {
    const loginData = [
      { id: 1, mes: '账号信息', picSite: picOne },
      { id: 2, mes: '我的收藏', picSite: picTwo },
      { id: 3, mes: '搜索历史', picSite: picThree },
      { id: 4, mes: '我的文件', picSite: picFour },
      { id: 5, mes: '退出登录', picSite: picFive },
    ];
    return (
      <div id="popOutTwoShow"
        style={{ display: this.props.displayStyle, top: '43px', right: '49px' }}
        onClick={this.handleClick}
      > 
        <span className="popOutArrow"></span>
        <LoginHeadMessage />
        <LoginMessageList list={loginData} />
      </div>
    );
  }
}

class LoginMessageList extends Component {
  render() {

    //   const List = this.props.list.map((item,id) =>
    //     <th className="loginText" key={id}><a>{item.mes}</a></th>
    // );
    //   const bgImg = this.props.list.map((item,id) =>
    //     <img className="loginImg" src={item.picSite} key={id} />
    // )
    //   import picOne from '../img/账号信息.png';
    // import picTwo from '../img/我的收藏.png';
    // import picThree from '../img/搜索历史.png';
    // import picFour from '../img/我的文件.png';
    // import picFive from '../img/退出登录.png';
    return (
      <div className="forward-line" style={{ display: this.props.displayStyle }}>
        <div>
          <div>
            {this.props.list.map((item, id) =>
              <div className="little-line">
                <img className="loginImg" src={item.picSite} alt="" key={id} />
                <div className="loginText" key={id}><a href="">{item.mes}</a></div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

class LoginHeadMessage extends Component {
  render() {
    return (
      <div className="login-message" style={{ display: this.props.displayStyle }}>
        <div style={{alignItems:'center'}}>
          <table className="first-line" >
            <tbody>
              <th><img src={loginOne} className="loginHeadMessageStyleOne" /></th>
              <th className="loginHeadMessageStyleTwo">
                <p className="loginHeadMessageStyleThree">aaa</p>
                <p className="loginHeadMessageStyleFour">test3@abcft.com</p>
              </th>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default NavLogMessage;