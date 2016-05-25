export default function socketReducer(state,action){
  if(typeof state === 'undefined'){
    state = {
      server: undefined
    }
  }
  switch (action.type) {
    case 'CONNECT_SERVER':
      console.log('conectar con el servidor');
      if(state.server != undefined){
        console.log('ya estas conectado');
        return state;
      }else{
        return Object.assign({},state,{
          server: io(action.url.href+':'+action.url.port)
        });
      }
      break;
    default:
      return state;
  }
}
