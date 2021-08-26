import axios from "axios";
import React, { useState } from "react";
import { useHistory , Link} from "react-router-dom";
import { Form, Button, Col, Row , Alert } from "react-bootstrap";
import "./Signup.css"
export default function Login(props) {

    /* =================
     Hooks State  
     ================= */
  const history = useHistory();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

    /* =================
     Functions Handler  
     ================= */
  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/user/login", credentials)
      .then((res) => {
        console.log("Express backend /login response", res);
        const token = res.data.token;
        const msg = res.data.msg;


        if (token) {
          localStorage.setItem("jwtToken", token);
          props.loginCallback();
          /*-- Redirect --*/
          history.push("/profile");
        } else {
        console.log("Email isn't exist try again")
         
        }
      });
  };


    /* =================
      Login Form  
     ================= */
  
  return (
    <>
    <div class="signup-form">
        
         
    <form action="" method="post">
      <h2>Login</h2>
      

      <div className="form-group">
          <input type="email" className="form-control" name="email" placeholder="Email Address" required="required"  onChange={(e) => onChangeInput(e)}/>
      </div>

      <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required"  onChange={(e) => onChangeInput(e)}/>
      </div>

      <div className="form-group">
                  <Link href="#">Forget Password ?</Link>
      </div>

          <br></br>
           
           <br></br>
              
      <div className="form-group text-center">
             <button id="but" type="submit" className="btn btn-primary btn-lg w-100 h-100" onClick={(e) => onSubmit(e)}>Login</button>
      </div>
   </form>

       <div class="text-center">Dont have an account? <Link to="/SignUp">Sign up here</Link></div>
   </div>   

      {/* we can add login with google OR facebook via pasport.js  */}
      </>
  );
}
