import React, { Component } from 'react';
import * as action from './store/actions/action';
import{ connect } from 'react-redux';

import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state ={
  //     age:18
  //   }
  // }

  // incrementAge=()=>{
  //   this.setState({
  //     age:this.state.age+1
  //   })
  // }

  // decrementAge=()=>{
  //   this.setState({
  //     age:this.state.age-1
  //   })
  // }



  render() {
    return (
      <div className="App">
        <div style={{textAlign:"center"}}>
          <p>you can increment only till 100</p>
      <h5>Age:{this.props.age1}
      {console.log("age", this.props.age1)}
      </h5>
      <h2> Tarzan Skills:{this.props.age2}</h2>
      <button onClick={()=>this.props.ageIncrement(this.props.age1+1)}>increament</button>               
      <button onClick ={()=>this.props.ageDecrement(this.props.age1-1)}>decreament</button>
      <button onClick ={()=>this.props.displayedage(this.props.age2+1)}>skills Rating</button>
      <p>you can rate only till 5.00</p>
      <div style={{textAlign:"left"}}>
       <h5> Harsha your skill-Rating is from Tarzan skill :{this.props.age2}</h5>
       <h6 style={{color:"orenge"}}>
         Login-By:{this.props.enable}
       </h6>
       <h4>Disable:{this.props.disabl}</h4>
    
      </div>
      </div>
      </div>
    );
  }
}



const mapStateToProps =state =>{
  return{
    age1:(state.age),
    age2:(state.rate),
    enable:state.student,
    disabl:state.disable
  }
}
const mapdispatchToProps =dispatch =>{
  return{
    ageIncrement:(updateAge)=>dispatch(action.incrementAge(updateAge)),
    ageDecrement:(updateAge)=>dispatch(action.decrementAge(updateAge)),
    displayedage:(showAge)=>dispatch(action.displayAge(showAge)),

  }
}

export default connect(mapStateToProps,mapdispatchToProps)(App);
// {} to declare variables
//  =>  lamda fuction