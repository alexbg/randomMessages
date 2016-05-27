class randomMessages{

  constructor(){
    this.socket = io('http://localhost:8080');
    this.isConfig = false;
    //this.configEvents();
  }
  configEvents(receiveMessage,receiveInfo){
    this.socket.on('message',function(data){
      console.log('received message');
      receiveMessage(data);
      this.sendReady();

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
  sendTest(){
    console.log('emit');
    console.log(this);
    this.socket.emit('hello',{message: 'emit hello'});
  }
  sendMessage(message){
    console.log('sending message');
    message = ' I am the message';
    this.socket.emit('message',{message: message});
  }
  sendReady(){
    console.log('sending ready');
    this.socket.emit('ready');
  }
}

export default randomMessages;
//const rm = new randomMessages();
