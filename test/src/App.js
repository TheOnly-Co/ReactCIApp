import React, { Component } from 'react'; 
import './App.css';
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: "Test App",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTJuvquCwL7eCHn45YEYven_6f4sTStbXMw&usqp=CAU"
    }
  }
  render (){
    return (
      <>
      <div className="App">
        <h1>Welcome, This is {this.state.name} !</h1>
        <img src= {this.state.img} alt="" width="500" height="600"/>
      </div>
      </>
    );
  }



}

export default App;
