import React from 'react';
import ReactUiKit from 'reactuikit';
import randomMessage from './../assets/js/rm';

const rm = new randomMessage();

const MainComponent = function(state){

  console.log(state);
  if(!rm.isConfig){
    console.log('configurando');
    rm.configEvents(state.receiveMessage);
  }

  if(state.messages != undefined){
    var messages = state.messages.map(function(element,index){
      return (
        <ReactUiKit.panel title='Test' header box key={'message-'+index}>
          {element}
        </ReactUiKit.panel>
      )
    });
  }

  return (
    <div className='uk-container uk-container-center'>
      <div className='uk-grid'>
        <div className='uk-width-1-1'>
          <div className='fixed-buttons'>
            <button onClick={rm.sendReady.bind(rm)}>I am ready</button>
            <button onClick={rm.sendMessage.bind(rm)}>Send message</button>
          </div>
          {messages}
          {state.children}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
