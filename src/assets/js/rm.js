//const dialog = require('electron').remote;

class randomMessages{

  constructor(){
    this.server = io('http://localhost:8080');
    this.configEvents();
  }
  configEvents(){
    this.server.on('welcome',function(data){
      //console.log(data)
      console.log(dialog);
      dialog.showMessageBox({message: 'ESTE ES EL MENSAJE'});
    });
  }
  addEvent(name,event){
    this.server.on(name,event);
  }
}

window.onload = function() {
  const rm = new randomMessages();
  //rm.init();
}
