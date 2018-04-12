import React, { Component } from 'react';
import List from './Components/list/list';
import './App.css';
import { height } from 'window-size';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'nothing',
      listArr: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'],
      bgColor: {background: 'none'},
      switch: false
    }
  }

  formStyle = {
    display:'block', 
    margin: '0 auto', 
    width: 400
  }

  textBgHandler = () => {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.setState({bgColor: {background: randomColor}});
  }

  formHandler = (e) => {
    this.setState({text: e.target.value});
    this.textBgHandler();
  }

  colorSwitcher = () => {
    this.setState({switch: !this.state.switch})
    this.checkSwitcher();
  }

  checkSwitcher = () => {
    if (!this.state.switch){
      let randomColorBody = '#'+Math.floor(Math.random()*16777215).toString(16);
      document.body.style.background = randomColorBody;
    }else{
      document.body.style.background = 'white';
    }
  }

  render() {
    return (
      <div className="App">
        <ul className="List">
          { this.state.listArr.map((item, index) => {
              return(<List listItem = {item} key = {index} />);
            })
          }
        </ul>
        <h1 style={this.state.bgColor}>{this.state.text}</h1>
        <input style={this.formStyle}  type='text' id='textForm' onChange = {this.formHandler} placeholder='Type here'></input>
        <button style={this.formStyle} onClick = {this.textBgHandler}>Change Text Background Color</button>
        <button style={this.formStyle, {height: 50, width: 200, fontSize: 20, marginTop: 30}} onClick = {this.colorSwitcher}>Color</button>
       
      </div>
    );
  }
}