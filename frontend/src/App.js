import { useState } from 'react';
import './App.css';
import RandomInputComponent from './FrontEnd/RandomInputComponent';
import CheckDataComponent from './FrontEnd/CheckDataComponent';
import MouseFollower from './FrontEnd/MouseFollower';
export default function App() {

  const [item ,setItem] = useState();
  const [arr , setArr] = useState([]); //intialize with empty array it or it will throw a error
  return (  

    <div className="App">
      <RandomInputComponent setItem={setItem} arr={arr} setArr={setArr}/ >
      <CheckDataComponent item={item}/>
      <MouseFollower/>
    </div>
  
  );
}


