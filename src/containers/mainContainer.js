import { connect } from 'react-redux';
import  actions  from './../actions/indexActions';
import mainComponent from './../components/indexComponent';

var getStates = function(state){
  return {
    messages: state.reducers.messageReducer.message
  }
}

var actionsButtons = function(dispatch){
  return {
    receiveMessage: function(data){
      console.log('container add message');
      dispatch(actions.receiveMessage(data.message));
    },
    saveMessage: function(){
      dispatch(actions.saveMessage(message));
    }
  }
}

console.log('Funcion');
console.log(mainComponent);
const Main = connect(
  getStates, // states
  actionsButtons // dispatchs
)(mainComponent);

console.log(Main);

export default Main;
