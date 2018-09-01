// import React, { Component } from 'react';
// // import './App.css';

// class A extends Component{
//     render(){
//         return(
//             <div>注册页面</div>
//         )
//     }
// }
// class B extends Component{
//     render(){
//         return(
//             <div>登录页</div>
//         )
//     }
// }
// class App extends Component {
//     constructor(){
//         super();
//         this.state={
//             hash:"#/"
//         }
//     }
//     componentDidMount(){
//         window.onhashchange = ()=>{
//             this.setState({
//                 hash:window.location.hash
//             });
//         }
//     }
//     render() {
//         let o;
//         let {hash} = this.state;
//         switch (hash) {
//             case "#/":
//                 o = (
//                     <div>首页</div>
//                 );
//                 break;
//             case "#/login":
//                 o = <B/>;
//                 break;
//             case "#/register":
//                 o = <A/>;
//                 break;
//         }
//         return (
//             <div className="App">
//                 {o}
//             </div>
//         );
//     }
// }

// export default App;