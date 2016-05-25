import React from 'react';

const socketComponent = function(state){
  return (
    <div>
      Este es el componente el main
      <button onClick={state.connect}>Esto es un boton</button>
    </div>
  );
}

export default socketComponent;
