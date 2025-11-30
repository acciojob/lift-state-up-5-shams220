
import React,{useState} from "react";
import './../styles/App.css';
import Form from './form'
const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return ( 
    <div>
        {/* Do not remove the main div */}
        <Form prop={[isLoggedIn,setIsLoggedIn]} />

    </div>
  )
}

export default App
