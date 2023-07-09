import {useState} from 'react';

import './App.css';

import CalcButton from './components/CalcButton/calc-button.component'
import ButtonBox from './components/ButtonBox/button-box.component';
import CalcScreen from './components/CalcScreen/calc-screen.component';

const App = () => {

  const [calculatorField, setCalculatorField] = useState('');
  

  const calculatorButtons = [
    ['c', '%', '.', '/'],
    [7, 8, 9, '*'],
    [4, 5, 6, '+'],
    [1, 2, 3, '-'],
    [0, '(', ')', '=']
  ];

  const equalButtonHandler = () => 
  {
    try
    {
    // eslint-disable-next-line no-eval
    const result = eval(calculatorField);
    setCalculatorField(result);
    }
    catch(err)
    {
      setCalculatorField('Invalid Expression');
    }

    
  }

  const clearButtonHandler = () =>
  {
    setCalculatorField('');

    console.log("clear pressed");
  }

  const percentButtonHandler = () =>
  {
    if(calculatorField === 'Invalid Expression')
    {
      setCalculatorField('');
    }

    setCalculatorField(calculatorField => calculatorField + '/100' )

    console.log("percent pressed");
  }

  const ButtonHandler = (val) => 
  {
    if(calculatorField === 'Invalid Expression')
    {
      setCalculatorField('');
    }

    setCalculatorField(calculatorField => calculatorField + val);

    console.log("regular pressed");
  }




  return(
    <div className = "App">
    
      <h1 className = 'calculator-title'>
        Pranav's Calculator
      </h1>

      <CalcScreen displayText = {calculatorField}/>

      <ButtonBox buttons = {calculatorButtons.flat().map((button) => {
          return(
            <CalcButton className = {
                          !isNaN(button)
                          ? "num-button"
                          : "operation-button" 
                        }
                        val = {button} 
                        onClick = {
                          button === "c"
                          ? clearButtonHandler
                          : button === "="
                          ? equalButtonHandler
                          : button === "%"
                          ? percentButtonHandler
                          : () => ButtonHandler(button)
                        }/>
          )
        })}
      />

    </div>
  );

};

export default App;
