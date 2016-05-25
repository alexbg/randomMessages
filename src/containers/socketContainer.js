import { connect } from 'react-redux';
import  actions  from './../actions/indexActions';
import socketComponent from './../components/socketComponent';

var getStates = function(state){
  return {}
}

var actionsButtons = function(dispatch){
  return {
    connect: function(){
      dispatch(actions.connect({href: 'http://localhost', port: '8080'}));
    }
  }
}
console.log('Funcion');
console.log(socketComponent);
const Main = connect(
  getStates, // states
  actionsButtons // dispatchs
)(socketComponent);

console.log(Main);

export default Main;
