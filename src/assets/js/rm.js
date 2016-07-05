class randomMessages{

  constructor(){
    this.socket = io('http://localhost:8080');
    this.isConfig = false;
    this.interval = '';
    this.isReady = false;
    //this.configEvents();
  }
  configEvents(receiveMessage,receiveInfo){
    this.socket.on('message',function(data){
      console.log('received message');
      receiveMessage(data);
      if(!this.setInterval){
        this.sendReady();
      }
      this.isReady = false;
    }.bind(this))
    this.socket.on('info',function(data){
      console.log(data);
      receiveInfo(data);
    }.bind(this))
    this.isConfig = true;
  }
  test(){
    console.log('test');
  }
  addEvent(name,event){
    this.socket.on(name,event);
  }
  setReadyinterval(){
    console.log('Setting interval');
    window.clearInterval(this.interval);
    this.interval = setInterval(function(){
      console.log(this.isReady);
      if(!this.isReady){
        this.sendReady();
        this.isReady = true;
      }
    }.bind(this),$('#inputInterval').val() * 60000);

  }
  sendMessage(message){
    console.log('sending message');
    console.log($('textarea').val());
    message = $('textarea').val();
    this.socket.emit('message',{message: message});
  }
  sendReady(){
    console.log('sending ready');
    this.socket.emit('ready');
  }
}

export default randomMessages;
//const rm = new randomMessages();
