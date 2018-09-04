import React,{Component} from 'react';
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

export default NavSubsite;