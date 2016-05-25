export default {
  connect: function(url){
    return{
      type: 'CONNECT_SERVER',
      url: url
    }
  },
  receiveMessage: function(message){
    return {
      type: 'RECEIVE_MESSAGE',
      message: message
    }
  },
  saveMessageInDb: function(id){
    return {
      type: 'SAVE_MESSAGE',
      id: id
    }
  },
  sendMessage: function(message){
    return {
      type: 'SEND_MESSAGE',
      message: message
    }
  }
}
