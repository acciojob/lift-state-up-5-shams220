import React from "react";
import './form.css';
const LoginForm = ({isLoggedIn,setIsLoggedIn}) => {
const login=()=>{
    
    setIsLoggedIn(true)
console.log("isLoggedIn",props.prop[0])
console.log("isLoggedIn",props.prop[1])

}

return (

<div>
   
{isLoggedIn ? <p>You are logged in!</p> :   <div>
      <div className="username">
        <label htmlFor="">Username:</label>
        <input type="text" />
      </div>
      <div className="password">
        <label htmlFor="">Password:</label>
        <input type="password" />
      </div>
      <button onClick={login}>Login</button>
    </div> 
}</div>


  
  );
};

export default LoginForm;
