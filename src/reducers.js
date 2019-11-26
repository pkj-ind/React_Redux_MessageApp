import {actionTypes} from './constaintsFile'

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
  