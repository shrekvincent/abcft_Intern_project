import React, { Component } from 'react';
// 引用两个样式文件
import './css/analystai.css';
import './css/nav.css';
// 引用4个容器组件
import Nav from './analystaiComponents/Nav';
import Search from './analystaiComponents/Search';
import HotRecommend from './analystaiComponents/HotRecommend';
import SearchRanking from './analystaiComponents/SearchRanking';

class Analystai extends Component {
  render() {
    return (
      <div className="root">
        <Nav />
        <div style={{
          height:100+"%",
          width:100+"%",
          backgroundImage:"url(" + require("./img/main-screen-bg.jpg") + ")",
          // backgroundImage:"require(./img/main-screen-bg.jpg)",
          backgroundSize:'cover',
          }}>
          <div className="main-screen">
            <div className="page-home-content">
              <Search />
              <div className="recommend-view">
                <div className="hot-recommend-list">
                  <HotRecommend />
                </div>
                <div className="search-ranking-list">
                  <SearchRanking />
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}
export default Analystai;

