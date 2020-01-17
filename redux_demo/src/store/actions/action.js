import * as actionType from "./actionType"

export const incrementAge = (updatedAge)=>{
    // this.setState({
    //   age:this.state.age+1
    // })
    if(updatedAge < 101 ){
        return {
            type:actionType.INCREMENT,
            //newAge:age
            payload:{
                newAge:updatedAge
            }
        }
    }
    
  }

  export const decrementAge=(updatedAge)=>{
    // this.setState({
    //   age:this.state.age+1
    // })
    
    return {
        type:actionType.DECREMENT,
        //newAge:age
        payload:{
            newAge:updatedAge
        }
    }
  }


export const displayAge=(showAge)=>{
    if (showAge<10){
        return {
            type:actionType.RATING,
            //newAge:age
            payload:{
                newAge:showAge
            }
        }
    }
   
}


