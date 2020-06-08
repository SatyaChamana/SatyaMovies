import React, {useState} from 'react';
import Login from './Login';
import './App.css';
import Movies from './Movies';



function App() {

let [loginFlag, setLoginFlag] = useState(true);

function checkLogin (flag) {
  if(flag){
    console.log("sssatya"); 
    setLoginFlag(true)
  }
}



  return (<div className='appWrapper'>
    <div className='navbar' >
      <div className='navText'>
        Satya Movies
      </div>
    </div>
    {!loginFlag ? <div className='loginScreen'>
      <Login checkLogin={checkLogin}/>
    </div> : <Movies/>}
  </div>
  )
}

export default App;
