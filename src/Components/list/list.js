import React from 'react';

const List = (props) => {
    return (
        <ul className="ListComponent">
          { props.listItems.map((item, index) => {
              return(<li>{item} <button>Up</button> <button>Down</button></li>);
            })
          }
        </ul>
    );
}

export default List;