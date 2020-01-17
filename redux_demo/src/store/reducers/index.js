import * as actionType from '../actions/actionType'

// you can use {INCREMENT} for one single type instead of star from actiontype.js


const initialState={
    age:100,
    rate:4,
    student:'Harsha',
    disable:false
}

  const reducer =(state=initialState,action) =>{
    switch(action.type){
        case actionType.INCREMENT:
            return {...state,age:action.payload.newAge}
        case actionType.DECREMENT:
            return {...state,age:action.payload.newAge}
        case actionType.RATING:
            return{...state,rate:action.payload.newAge}
        default :
            return state
    }
}
export default reducer;