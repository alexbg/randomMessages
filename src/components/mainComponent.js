import React from 'react';
import randomMessage from './../assets/js/rm';
import ruk from 'reactuikit';

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
        <ruk.panel title={element.time} header box key={'message-'+index}>
          {element.message}
        </ruk.panel>
      )
    });
  }

  return (
    <div className='uk-container uk-container-center'>
      <div className='uk-grid'>
        <div className='uk-width-1-1'>
          <div className='fixed-buttons'>
            <ruk.button onClick={rm.sendReady.bind(rm)}>I am ready</ruk.button>
            <ruk.button
              modal='modalMessage'>
              Make a message
            </ruk.button>
            <ruk.button
              modal='modalOptions'>
              Options
            </ruk.button>
          </div>

          <ruk.modal.modal id='modalMessage'>
            <ruk.modal.dialog>
              <ruk.form.form id='messageForm'>
                <textarea>
                </textarea>
              </ruk.form.form>
              <ruk.modal.modalFooter>
                <ruk.button onClick={rm.sendMessage.bind(rm)}>
                  Send Message
                </ruk.button>
              </ruk.modal.modalFooter>
            </ruk.modal.dialog>
          </ruk.modal.modal>

          <ruk.modal.modal id='modalOptions'>
            <ruk.modal.dialog>
              <ruk.form.form id='optionsForm' modifiers='stacked'>
                <ruk.form.input
                  label='Set time'
                  type='text'
                  id='inputInterval'
                  row
                  onChange={rm.setReadyinterval.bind(rm)}/>
              </ruk.form.form>
            </ruk.modal.dialog>
          </ruk.modal.modal>
          {messages}
          {state.children}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
