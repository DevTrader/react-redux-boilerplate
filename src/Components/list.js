import React, { Component } from 'react';
//import './App.css';

// const listGenerate = (props) => {
//     console.log(props.list)
// }

const List = (props) => {
    return (
        <li data-index = {props.index}>{props.listItem} <button onClick = {props.swap.upHandler}>Up</button> <button onClick = {props.swap.downHandler}>Down</button></li>
    );
}

// class List extends Component {
//   render() {
//     return (
//       <ul className="List">
//        {listGenerate}
//       </ul>
//     );
//   }
// }

export default List;