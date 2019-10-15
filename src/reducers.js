import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

let initialState = {
  data: [ {Name:"Ritika", Email:"ritika@gmail.com"}, {Name:"Pallavi", Email:"pallavi@gmail.com"}]
};

const Data = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: state.data.concat(action.payload)
      };

    case "DELETE_DATA":{
      let DataList = [...state.data];
      let updatedList = DataList.filter((item, i) => action.index !== i);
      return {
        ...state,
        data: updatedList
      };
    }

    case "EDIT_DATA":{
        let DataList = [...state.data];
        let X = DataList[action.payload.index]
        X.Name= action.payload.NewName;
        X.Email= action.payload.NewEmail;
        let editedList = DataList


        return{
            ...state,
            data: editedList
        }
    }
      
    default:
      return state;
  }
};

const EditDetails = (state= null, action)=> {
  if(action.type === "EDIT_DETAILS"){
    return action.payload;
  }
  
  return state;
}

export default combineReducers({ 
  Data:Data,
  EditDetails:EditDetails,
  form: formReducer
});
