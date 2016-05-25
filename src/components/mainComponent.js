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
    var messages = state.messages.map(function(element){
      return (
        <ReactUiKit.panel title='Test' header box>
          {element}
        </ReactUiKit.panel>
      )
    });
  }

  return (
    <div className='uk-container'>
      <div className='uk-grid  uk-container-center'>
        <div className='uk-width-1-1'>
          <button onClick={rm.sendTest.bind(rm)}>Pulsalo</button>
          {messages}
          {state.children}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
