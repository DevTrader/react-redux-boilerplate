import React, { Component } from 'react';
//import './App.css';

// const listGenerate = (props) => {
//     console.log(props.list)
// }

const List = (props) => {
    return (
        <li>{props.listItem} <button>Up</button> <button>Down</button></li>
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