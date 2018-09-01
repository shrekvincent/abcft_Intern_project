import React, { Component } from 'react';
import iconPic from "./img/icon-products.svg"
import loginOne from "./img/login-one.png"
import pageHomeLogo from "./img/logo.png"
import BGPic from "./img/main-screen-bg.jpg"

import './App.css';
import './css/analystai.css';
import './css/nav.css';
// 我在测试

class App extends Component {
  render() {
    const bgStyle = {
      // backgroundImage:'url(${BGPic})'
    };
    return (
      <div className="root">
        <Nav />
        <div style={{height:100+"%",
        width:100+"%",
        // background
        backgroundImage:"url(" + require("./img/main-screen-bg.jpg") + ")",
        backgroundSize:'cover',}}>
 
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
// 头部导航 有三个组件分别为NavSubsite,NavNine,NavLogMessage
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
// NavSubsite部分
function ListItem(props) {
  return <li className="main-menu-btn-item"><a href="#">{props.value}</a></li>;
}
function NumberList(props) {
  const numbers = props.numbers;
  const listItems =numbers.map((number) =>
  <ListItem key={number.toString()} value={number} />
);
  return (
    <ul className="main-nav-btn">
      {listItems}
    </ul>
  );
}
const numbers = ['研报','公告','资讯','数据','自选股','其他'];
class NavSubsite extends Component {
  render() {
    return (
          <NumberList numbers={numbers} />    
    );
  }
}
// NavNine部分
class NavNine extends Component {
  render() {
    return (
      <div>
        <div className="main-nav-btn">
          <img src={iconPic} alt="" width="16px" height="16px" marginLeft="30px" className="main-menu-btn-onePart" />
        </div>
        <NavPopOutOne />
      </div>
    );
  }
}


function ProductList(props) {
  const List = props.list.map((item) =>
    <li key={item.id} className="product-one">{item.mes}</li>
);
  return (
    <div id="Idiv" style={{display:'block',top:'80px',right:'100px'}}>
      <div className="first-class"></div>
      <ul className="second-class">
        {List}
      </ul>
    </div>
  )
}
// 弹出层NavPopOutOne
class NavPopOutOne extends Component {
  render() {
    const Ninth = [{id:1,mes:'研报',sty:''},
                {id:2,mes:'公告',sty:''},
                {id:3,mes:'资讯',sty:''},
                {id:4,mes:'图表',sty:''},
                {id:5,mes:'数据',sty:''},
                {id:5,mes:'自选股',sty:''},
                {id:6,mes:'创投数据',sty:''},
                {id:7,mes:'公司研究',sty:''},
                {id:8,mes:'经济数据',sty:''},
                {id:9,mes:'其他',sty:''},
      ];
    return (
      <div>
        <ProductList list={Ninth} />
      </div>
    );
  }
}
// 弹出层NavPopOutTwo
// NavLogMessage部分
class NavLogMessage extends Component {
  render() {
    return(
      <div className="main-nav-btn">
        <div className="loginUserTag">
          <span>
            <img src={loginOne} alt="" width="20px" height="20px" className="main-menu-btn-twoPart" />
          </span>
          <span className="loginUserInf">test3@abcft.comffff</span>
        </div>
      </div>
    );
  }
}
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

// HotRecommend部分 其中HotRecommeng包含3个组件 分别是HotRecommendHead、HotRecommendItem、
// HotRecommendItemTwo
class HotRecommend extends Component {
  render() {
    return(
      // <div className="main-screen">
        // <div className="page-home-content">
        <div>
          <HotRecommendHead />
        </div>
      // </div>
    );
  }
}
class HotRecommendHead extends Component {
  render() {
    return(
        <div>
            <p className="list-title-first">热门推荐</p>     
              <HotRecommendItemOne />   
              <HotRecommendItemTwo /> 
              <HotRecommendItemThree /> 
        </div>
    )
  }
}

// 自定义 ul返回函数
function NewsMessageStyleOne(props) {
  const content = (
    <dd className="list-item">
      {props.posts.map((post) =>
        <div className="first-item">
          <div key={post.id} className="query-text"><a href="#">{post.news}</a></div>
          <div className="query-intro-two">
              <span key={post.id} className="info-tag-one">{post.source}</span>
              <span key={post.id} className="info-tag-two">{post.time}</span>
          </div>
        </div>
      )}
    </dd>
  );
  return(
      // {content}
      // <content />
      <div>
        {content}
      </div>
  );
}
function NewsMessageStyleTwo(props) {
  const content = (
    <div id="newsMessage">
      {props.posts.map((post) =>
        <div>
          <div key={post.id} className="query-text"><a href="#">{post.news}</a></div>
          <div className="query-intro-two">
              <span key={post.id} className="info-tag-one">{post.source}</span>
              <span key={post.id} className="info-tag-two">{post.time}</span>
          </div>
        </div>
      )}
    </div>
  );
  return(
      // {content}
      // <content />
      <div>
        {content}
      </div>
  );
}
// function NewsMessagePartTwo(props) {
//   const content = (
//     <div id="newsMessage">
//       {props.posts.map((post) =>
//         <div className="query-intro">
//             <span key={post.id} className="info-tag-one">{post.source}</span>
//             <span key={post.id} className="info-tag-two">{post.time}</span>
//         </div>
//       )}
//     </div>
//   );
//   return(
//       // {content}
//       // <content />
//       <div>
//         {content}
//       </div>
//   );
// }
class HotRecommendItemOne extends Component {
  render() {
    const divStyle = {
      width:'84px',
      height:'66px',
      marginLeft:'0',
      marginRight:'10px',
    }
    // const postsLineOne = [
    //   {id:1, news:'房地产税立法有望加快：草案年内曾在内部征求意见', source:'21世纪经济报', time:'1小时前'},
    // ];
    const posts1 = [   
      {id:1, news:'梅永红已入职碧桂园？华大回应：将统筹双方农业板块', source:'南方网', time:'1小时前'},
      // {id:2, news:'管清友：关于跟人所得税的八个问题', source:'南方网', time:'1小时前'},
      // {id:3, news:'贬值预期之下，外汇储备上升说明了什么？', source:'文涛宏观债券研究', time:'1小时前'},
    ];
    const posts2 = [   
      {id:1, news:'管清友：关于跟人所得税的八个问题', source:'南方网', time:'1小时前'},
    ];
    const posts3 = [   
      {id:1, news:'贬值预期之下，外汇储备上升说明了什么？', source:'文涛宏观债券研究', time:'1小时前'},
    ];
    return(
      <dl className="small-view-1column">
        <dt className="list-box-title-one">资讯</dt>
        <dd className="first-item">
          <div className="first-item-one">
            <img src={require('./img/cropped.jpg')} alt="" style={divStyle} />
          </div>
          <ul>
            <li className="query-text" style={{fontSize:'12px'}}><a href="#">房地产税立法有望加快：草案年内曾在内部征求意见</a></li>
            <li className="query-intro">
              <span className="info-tag-one">21世纪经济报</span>
              <span className="info-tag-two">1小时前</span>
            </li>
          </ul>
        </dd>
          <div>
            <NewsMessageStyleOne posts={posts1} />
          </div>
          <div>
            <NewsMessageStyleOne posts={posts2} />
          </div>
          <div>
            <NewsMessageStyleOne posts={posts3} />
          </div>
      </dl>
    )
  }
}
class HotRecommendItemTwo extends Component {
  render() {
    const posts = [
      {id:1, news:'房地产税立法有望加快：草案年内曾在内部征求意见', source:'21世纪经济报', time:'1小时前'},
      {id:2, news:'梅永红已入职碧桂园？华大回应：将统筹双方农业板块', source:'南方网', time:'1小时前'},
      {id:3, news:'管清友：关于跟人所得税的八个问题', source:'南方网', time:'1小时前'},
      {id:4, news:'贬值预期之下，外汇储备上升说明了什么？', source:'文涛宏观债券研究', time:'1小时前'}, 
    ];
    return(
      <dl className="small-view">
        <dt className="list-box-title-two">数据</dt>
          <dd>
            <NewsMessageStyleTwo posts={posts} />
          </dd>
      </dl>
    )
  }
}
class HotRecommendItemThree extends Component {
  render() {
    const posts = [
      {id:1, news:'房地产税立法有望加快：草案年内曾在内部征求意见', source:'21世纪经济报', time:'1小时前'},
      {id:2, news:'梅永红已入职碧桂园？华大回应：将统筹双方农业板块', source:'南方网', time:'1小时前'},
      {id:3, news:'管清友：关于跟人所得税的八个问题', source:'南方网', time:'1小时前'},
      {id:4, news:'贬值预期之下，外汇储备上升说明了什么？', source:'文涛宏观债券研究', time:'1小时前'}, 
    ];
    return(
      <dl className="small-view">
        <dt className="list-box-title-three">研报</dt>
          <dd>
            <NewsMessageStyleTwo posts={posts} />
          </dd>
      </dl>
    )
  }
}

// SearchRanking部分
function RankingList(props) {
    // const numbers = props.numbers;
    const content = (
        props.posts.map((post) =>
          <li className="search-list-item up" key={post}><a href="#">{post}</a></li>
        )
    )
  return(
    <ol className="list-box">
      {content}
    </ol>
  )
}
class SearchRanking extends Component {
  render() {
    const posts = [
      '养老目标基金',
      '浙江大湾区',
      '周期行业',
      '医药生物',
      '人民币大跌',
      '中报业绩大跌',
      '债务违约',
    ];
    return(
        <div>
          <div className="list-title">搜索排行</div>
          <RankingList posts={posts} />
        </div>
    )
  }
}
// export default NavSubsite;
export default App;

