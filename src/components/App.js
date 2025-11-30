
import React,{useState} from "react";
import './../styles/App.css';
import LoginForm from './LoginForm'
const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return ( 
    <div>
        {/* Do not remove the main div */}
        <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

    </div>
  )
}

export default App
