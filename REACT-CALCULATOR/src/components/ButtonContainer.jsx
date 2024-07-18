import React from 'react'
import styles from './ButtonContainer.module.css'

const ButtonContainer = ({onbuttonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.ButtonContainer}>
      {buttonNames.map((buttonName) => (
        <button className={styles.button} key={buttonName} onClick={()=>{onbuttonClick(buttonName)}}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;