import React from 'react'
import { Provider, connect } from 'react-redux';
import Presentational from './displayMessage'
import {addMessage} from './actionCreator'
import {store} from './store'

const mapStateToProps = (state) => {
    return {messages: state}
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage(message))
      }
    }
  };
  
  const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
  
  class AppWrapper extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Container/>
        </Provider>
      );
    }
  }

  export default AppWrapper