import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';


// import Text from './Text';
import CallbackText from '../components/CallbackText/CallbackText';
import LoginForm from '../components/LoginForm';


// context
import UserContext from '../context/UserContext';

import '../components/App.css';

function App() {
  const [value, setValue] = useState(10);
  const [isShowText, setShowText] = useState(false);
  // const [inputValue, setInputValue] = useState('');


  const [text, setText] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus aliquid voluptatibus hic voluptatum corporis vitae voluptate temporibus, beatae exercitationem.')
  const [isLoading] = useState(false);

  const increment = () => setValue(value + 1);

  // useCallback використовуэмо тыльки для статичних функцій, для динамічних  він не діє
  const reset = useCallback(() => setValue(0), [setValue]);

  const togglerShowText = () => setShowText(!isShowText);

  // const myInput = useRef();



  // Функцыя без жодних параметрів буде працювати при кожному рендері
  // useEffect(() => console.log('render'))

  // коли вставили компонент в дом did mount
  useEffect(() => console.log('did mount'), [])

  // на щось реагую
  // useEffect(() => console.log('value', value), [value,])

  // коли вставили компонент в дом did update value
  // useEffect(() => setShowText(!isShowText), [value])
  // useEffect(() => console.log("isShowText", isShowText), [value, isShowText])


  // useEffect(() => {
  //   // document.getElementById('login').focus();
  //   // console.log(myInput);
  //   myInput.current.focus();
  // }, [])


  useLayoutEffect(() => {
    if (isLoading) {
      setText('Welcome!')
    } else {
      setText('Please wait!')
    }

  }, [isLoading])

  return (
    <UserContext.Provider value={value}>
      <div className="App">
        <h1>React - Houks</h1>


        <p>{value}</p>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <hr />
        <button onClick={togglerShowText}>Show text</button>
        {/* {isShowText && <Text />} */}
        {isShowText && <CallbackText reset={reset} />}


        <hr />
        <LoginForm />
        {/* <label>
          <span>Login:</span>
          <input
            type="text"
            name="login"
            ref={myInput}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
        </label>
        <br />
        <label>
          <span>Password:</span>
          <input type="password" name="passwords" />
        </label> */}
        <hr />

        <p>{text}</p>


      </div>
    </UserContext.Provider>

  );
}

export default App;
