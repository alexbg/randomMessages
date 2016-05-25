export default function socketReducer(state,action){
  if(typeof state === 'undefined'){
    state = {
      messages: []
    }
  }
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      console.log('MESAGE RECINIDO');
      console.log(action.message);
      state.messages.push(action.message);
      var messages = state.messages.map(function(element){
        return element;
      });

      return Object.assign({},state,{
        message: messages
      });
      break;
    case 'SAVE_MESSAGE':
      console.log('guardar mensaje');
      return state;
    default:
      return state;
  }
}
