import React, { Component } from 'react';
import List from './Components/list';
import './App.css';


class App extends Component {

  state = {
    text: 'nothing',
    listArr: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6']
  }


  textHandler = () => {
    this.setState({text: 'Something'});
    if(this.state.text == 'Something'){
      this.setState({text:'Nothing Again'});
    }
  }

  // listRender = () => {
  //   this.state.listArr.map((item, index) => {
  //     console.log(item);
  //     return(<List listItem = {item} key = {index} />);
  //   })
  // }

  render() {
    return (
      <div className="App">
        <ul className="List">
          { this.state.listArr.map((item, index) => {
              return(<List listItem = {item} key = {index} />);
            })
          }

          {/* Why would this not work ? {this.listRender()} */}
        </ul>
        <h1>{this.state.text}</h1>
        <button onClick = {this.textHandler}>Change</button>
      </div>
    );
  }
}

export default App;
