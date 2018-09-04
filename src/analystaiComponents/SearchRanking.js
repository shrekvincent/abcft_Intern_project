import React, { Component } from 'react';
import '../css/analystai.css';
// SearchRanking部分
function RankingList(props) {
  // const numbers = props.numbers;
  const content = (
      props.posts.map((post) =>
        <li className="search-list-item down" key={post}><a href="#">{post}</a></li>
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
          {/* <RankingList posts={posts} /> */}
          <ol className="list-box">
            <li className="search-list-item up"><a href="#">养老目标基金</a></li>
            <li className="search-list-item new down"><a href="#">浙江大湾区</a></li>
            <li className="search-list-item new"><a href="#">周期行业</a></li>
            <li className="search-list-item draw"><a href="#">医药生物</a></li>
            <li className="search-list-item down"><a href="#">人民币大跌</a></li>
            <li className="search-list-item down"><a href="#">中报业绩大跌</a></li>
            <li className="search-list-item up new"><a href="#">债务违约</a></li>
          </ol>
        </div>
    )
  }
}
export default SearchRanking;