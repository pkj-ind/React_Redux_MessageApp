import {actionTypes} from './constaintsFile'
export const addMessage = (message) => {
    return {
      type: actionTypes.ADD,
      message: message
    }
  };