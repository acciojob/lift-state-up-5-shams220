import React from "react";
import './form.css';
const Form = (props) => {
const login=()=>{
    
    props.prop[1](true) 
console.log("isLoggedIn",props.prop[0])
console.log("isLoggedIn",props.prop[1])

}

return (

<div>
   
{props.prop[0] ? <p>User log</p> :   <div>
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

export default Form;
