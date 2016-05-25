export default {
  connect: function(url){
    return{
      type: 'CONNECT_SERVER',
      url: url
    }
  }
}
