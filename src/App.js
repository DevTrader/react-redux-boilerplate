import React, { Component } from 'react';
import List from './Components/list';
import './App.css';

Array.prototype.swap = function(a, b) {
  let temp = this[a];
  this[a] = this[b];
  this[b] = temp;
  console.log( `Swaped ${a} and ${b}`);
};

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

  //This Object will be accessed by the <List />---------------------
  swap = {
    upHandler: (e) => {
      console.log('CLICK');
     //Getting the index of the list item through the html "data-" prefix and targeting it with the ".dataset" javascript selector, the event targets the button, parentElement targets the list tag.
      const elementIndex = e.target.parentElement.dataset.index;
      let listArrState = [...this.state.listArr];
      //If it isn't the first list item, run the swap method declared through Array.prototype on line 5.
      if (elementIndex > 0) {
        listArrState.swap(elementIndex, elementIndex - 1);
      }
      console.log(listArrState);
      this.setState({listArr: [...listArrState]});
    },
    //Same as above, but it swaps the list item down one.
    downHandler: (e) => {
      console.log('CLICK');
      // console.log(e.target.parentElement.dataset.index);
       const elementIndex = e.target.parentElement.dataset.index;
       let listArrState = [...this.state.listArr];
       if (elementIndex < this.state.listArr.length - 1) {
         listArrState.swap(elementIndex, Number(elementIndex) + 1);
       }else{
         return;
       }
       console.log(listArrState);
       this.setState({listArr: [...listArrState]});
    }
  }

  render() {
    return (
      <div className="App">
        <ol className="List">
          { this.state.listArr.map((item, index) => {
              return(<List listItem = {item} key = {index} index = {index} swap = {this.swap}/>);
          })}

          {/* Why would this not work ? {this.listRender()} */}
        </ol>
        <h1>{this.state.text}</h1>
        <button onClick = {this.textHandler}>Change</button>
      </div>
    );
  }
}

export default App;
