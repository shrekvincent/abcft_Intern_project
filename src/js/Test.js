import React, { Component } from 'react';
// import './App.css';
// import './css/analystai.css';
// import './css/nav.css';
class Test extends React.Component{
  constructor(){
      super();
      this.state = {name:'Hello world!'};
  }
  
  preventPop(name, e){    //事件对象e要放在最后
      e.preventDefault();
      alert(name);
  }
  
  render(){
      return (
          <div>
              <p>hello</p>
              {/* 通过 bind() 方法传递参数。 */}
              <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
          </div>
      );
  }
}
// class Test extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn:true};
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'On' : 'OFF'}
//       </button>
//     );
//   }
// }

export default Test;