import React,{Component} from 'react';
import iconPic from "../img/icon-products.svg";
import "../css/nav.css";
// 导入九宫格中img

import reportPic from "../img/icon-report.svg";
import noticePic from "../img/icon-notice.svg";
import newsPic from "../img/icon-news.svg";
import chartPic from "../img/icon-chart.svg";
import dataPic from "../img/icon-data.svg";
import mystockPic from "../img/icon-mystock.svg";
import vcPic from "../img/icon-vc.svg";
import gsyjPic from "../img/icon-gsyj.svg";
import jjsjPic from "../img/icon-jjsj.svg";
import otherPic from "../img/icon-other.svg";
// NavNine部分
class NavNine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayStyle:'none',
    }
  }
  // 声明周期函数
  componentDidMount() {
    // const myDiv = document.getElementById('Idiv');
    // myDiv.addEventListener('click', this.handleClick,true);
    // const Div = document.getElementById('popOutOne');
    // Div.addEventListener('click', this.handleClick,false);
    document.addEventListener('click', this.handleMouseUp,false);
  }
  handleMouseUp = (event) => {
    // console.log(1);
      this.setState({
        displayStyle: 'none'
      })
  }
  handleClick = (event) => {
    // console.log(2);
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    if (this.state.displayStyle === "none") {
      // console.log('none');
      document.getElementById('popOutTwoShow').style.display = 'none';
      this.setState({
        displayStyle:'block'
      })    
    } else {
      // console.log('block');
      this.setState({
        displayStyle:'none'
      })
    }
  };
  
  render() {
    return (
      <div>
        <div id="popOutOne" className="main-nav-btn">
          <img src={iconPic} alt="" width="16px" height="16px" 
            margin-left="30px" className="main-menu-btn-onePart"
            onClick={this.handleClick}
          />
        </div>
        <NavPopOutContentOne displayStyle={this.state.displayStyle} />
      </div>
    );
  }
}

// 弹出层内容NavPopOutOne
class NavPopOutContentOne extends Component {
  render() {
    const Ninth = [{id:1,mes:'研报',sty:reportPic},
                  {id:2,mes:'公告',sty:noticePic},
                  {id:3,mes:'资讯',sty:newsPic},
                  {id:4,mes:'图表',sty:chartPic},
                  {id:5,mes:'数据',sty:dataPic},
                  {id:5,mes:'自选股',sty:mystockPic},
                  {id:6,mes:'创投数据',sty:vcPic},
                  {id:7,mes:'公司研究',sty:gsyjPic},
                  {id:8,mes:'经济数据',sty:jjsjPic},
                  {id:9,mes:'其他',sty:otherPic},
      ];
    const divStyle = {

    }
    return (
      <div id="popOutOneShow" style={{display:this.props.displayStyle}}>
        {/* <ProductList list={Ninth} /> */}
        <ProductList />
      </div>
    );
  }
}

// 子组件要想和父组件通信，子组件要调用父组件传递过来的方法
class ProductList extends Component {
  handleClick = event => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }
  render() {
  //   const List = this.props.list.map((item,id) =>
  //   <li key={id} className="product-one" style={{backgroundImage:item.sty}}>{item.mes}</li>
  // );
    return (
      <div id="Idiv" style={{display:'block', top:'43px',right:'135px'}} onClick={this.handleClick}>
        <span className="popOutArrow" style={{ background:'#fff'}}>
        </span>   
        <div className="first-class">全部产品</div>
        <ul className="second-class">
          {/* {List} */}
          <li className="product-one" style={{backgroundImage:`url(${reportPic})`}}><a href="">研报</a></li>
          <li className="product-one" style={{backgroundImage:`url(${noticePic})`}}><a href="">公告</a></li>
          <li className="product-one" style={{backgroundImage:`url(${newsPic})`}}><a href="">资讯</a></li>
          <li className="product-one" style={{backgroundImage:`url(${chartPic})`}}><a href="">图标</a></li>
          <li className="product-one" style={{backgroundImage:`url(${dataPic})`}}><a href="">数据</a></li>
          <li className="product-one" style={{backgroundImage:`url(${mystockPic})`}}><a href="">自选股</a></li>
          <li className="product-one" style={{backgroundImage:`url(${vcPic})`}}><a href="">创投数据</a></li>
          <li className="product-one" style={{backgroundImage:`url(${gsyjPic})`}}><a href="">公司研究</a></li>
          <li className="product-one" style={{backgroundImage:`url(${jjsjPic})`}}><a href="">经济数据</a></li>
          <li className="product-one" style={{backgroundImage:`url(${otherPic})`}}><a href="">其他</a></li>
        </ul>
      </div>
    )
  }
}

export default NavNine;