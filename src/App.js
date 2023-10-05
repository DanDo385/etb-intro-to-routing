import { useState, useContext, createContext } from 'react';
import './App.css';

const MyContext = createContext('initial');

function App() {
  const [value, setValue] = useState('Hello F`ing World');

  const changeValue = (newValue) => {
    setValue(newValue);
  }
  
  return (
    <MyContext.Provider value={{value, changeValue}}>
      <Example />
    </MyContext.Provider>
  );

}

function Example() {
  const { value, changeValue } = useContext(MyContext);
  return (
    <div>
      <p>The current value is '{value}'</p>
      <button onClick={() => changeValue('Example Value')}>
        Example: Click me to change the value
      </button>
    </div>
  );
}

export default App;