import React, { Component } from 'react';
import pageHomeLogo from "../img/logo.png";
// Seach 部分
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayStyle: 'none'
    }
  }
  componentDidMount() {
    document.addEventListener('click', this.handleMouseUp, false);
  }
  handleMouseUp = (event) => {
    this.setState({
      displayStyle: 'none'
    })
  }
  handleClick = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    if(this.state.displayStyle === "none") {
      // document.getElementById()
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
    return(
      // <div className="main-screen">
        <div className="searchContainer"> 
          <div className="page-home-logo">
            <img className="page-home-logo" src={pageHomeLogo} alt="" />
          </div>
          <div className="search-box">
            <input onClick = {this.handleClick} id="searchFrame" type="search" className="button-search-null" placeholder="大家都在搜：美国加征关税" />
            <button className="button-search-sure">搜索</button>
          </div> 
          <SearchPopOut displayStyle = {this.state.displayStyle} />
        </div>
      // </div>
    );
  }
}
class SearchPopOut extends Component {
  render() {
    return(
      <div className="searchPopOut" style={{display: this.props.displayStyle}}>
        <div className="latestSearch">
          <div className="searchTitle">
            <span>最近搜过</span>
            <span style={{cursor: 'pointer'}}><a href="">清空</a></span>
          </div>
          <ul className="searchQuery">
            <li className="searchOption queryDelete" style={{paddingRight: '12px'}}>
              <span>平安银行</span>
              <span className="deleteStyle"><a href="#">删除</a></span>
            </li>
            <li className="searchOption queryDelete" style={{borderBottom: '1px solid #f6f6f6',paddingRight: '12px'}}>
              <span>土耳其货币崩盘</span>
              <span className="deleteStyle"><a href="#">删除</a></span>
            </li>
          </ul>
        </div>
        <div className="hotSearch">
          <div className="searchTitle">
            <span>热门搜索</span>
          </div>
          <ul className="searchQuery">
            <li className="searchOption">收盘集合竞价</li>
            <li className="searchOption">养老目标基金</li>
            <li className="searchOption">p2p暴雷</li>
            <li className="searchOption">新能源汽车</li>
            <li className="searchOption">工业互联网</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Search;