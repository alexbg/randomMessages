class randomMessages{

  constructor(){
    this.socket = io('http://localhost:8080');
    this.isConfig = false;
    //this.configEvents();
  }
  configEvents(receiveMessage){
    this.socket.on('message',function(data){
      console.log('received message');
      receiveMessage(data);
    });
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
}

export default randomMessages;
//const rm = new randomMessages();
