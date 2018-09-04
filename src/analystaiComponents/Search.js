import React, { Component } from 'react';
import pageHomeLogo from "../img/logo.png";
// Seach 部分
class Search extends Component {
  render() {
    return(
      // <div className="main-screen">
        <div> 
          <div className="page-home-logo">
            <img className="page-home-logo" src={pageHomeLogo} alt="" />
          </div>
          <div className="search-box">
            <input id="searchFrame" type="search" className="button-search-null" placeholder="大家都在搜美国加征关税" />
            <button className="button-search-sure">搜索</button>
          </div> 
        </div>
      // </div>
    );
  }
}
export default Search;