import {useState, useEffect} from 'react';

import './App.css';

import CalcButton from './components/CalcButton/calc-button.component'
import ButtonBox from './components/ButtonBox/button-box.component';

const App = () => {

  return(
    <div>
      <ButtonBox buttons = <CalcButton className = 'test-button'
                                       val = "test"
                                       onClick = {() => {
                                        console.log('Button Pressed');
                                       }}
                            />
      />
    </div>
  );

};

export default App;
