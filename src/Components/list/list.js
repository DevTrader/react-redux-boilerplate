import React from 'react';

const List = (props) => {
    return (
        <li>{props.listItem} <button>Up</button> <button>Down</button></li>
    );
}

export default List;