import React, { Component } from 'react';
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
          <div key={post} className="query-text"><a href="#">{post.news}</a></div>
          <div className="query-intro-two">
              <span key={post} className="info-tag-one">{post.source}</span>
              <span key={post} className="info-tag-two">{post.time}</span>
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
            <img src={require('../img/cropped.jpg')} alt="" style={divStyle} />
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

export default HotRecommend;