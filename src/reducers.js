import {actionTypes} from './constaintsFile'

export const addMessage = (message) => {
    return {
      type: actionTypes.ADD,
      message: message
    }
  };

export const messageReducer = (state = [], action) => {
    switch (action.type) {
      case actionTypes.ADD:
        return [
          ...state,
          action.message
        ];
      default:
        return state;
    }
  }
  
  //export default messageReducer