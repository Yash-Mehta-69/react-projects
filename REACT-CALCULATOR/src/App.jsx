import React, { useState } from 'react'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
import styles from './App.module.css'


const App = () => {

  // State to store the calculator value
  
  let [CalVal,setCalVal] = useState("");
  const onbuttonClick = (buttontext) => {
    if (buttontext === "C"){
      setCalVal("");
    }

    else if(buttontext === "=") {
      const result = eval(CalVal)
      setCalVal(result);

    }
    else {
      let newDisplayval = CalVal + buttontext;
      setCalVal(newDisplayval);
    }


  }
  return (
    <div className={styles.calculator}>
      <Display displayvalue={CalVal}></Display>
      <ButtonContainer onbuttonClick ={onbuttonClick}></ButtonContainer>

    </div>
  )
}

export default App