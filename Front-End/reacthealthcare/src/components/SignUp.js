import React, { useState, useEffect } from "react";
import { useHistory ,Link} from "react-router-dom";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./Signup.css"
export default function SignUp() {


     /* ===================
      Hooks &  State 
     ===================*/
    const history = useHistory();
    const [user, setUser] = useState({}); 
    const [register, setRegister] = useState(true);
  
    /* ===================
      Function handlers
     ===================*/
    const onChangeInput = ({ target: { name, value } }) => {
      setUser({ ...user, [name]: value });
    };
    const onSubmit = (event) => {
      event.preventDefault();
      axios
        .post("http://localhost:5000/api/user/register", user)
        .then((res) => {
          const user = res.data.user;
          if (user) {
            history.push("/login");
          } else {
            setTimeout(() => {
              setRegister(false);
            }, 1000);
          }
        })
        .catch((err) => console.log(err));
    };
  
    return (
         /*--- To show Alert If the email isn't exist ---*/
        <>
        {!register && (
            <Alert variant={"danger"}>
              The email is already in use. Please change the email
            </Alert>
          )}

        {/* SignUp form */}

     <div class="signup-form">
        
         
    <form action="" method="post">
          <h2>Sign Up</h2>
          <div className="form-group">
              <input type="name" className="form-control" name="name" placeholder="Your name" required="required" onChange={(e) => onChangeInput(e)}/>
          </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" placeholder="Email Address" required="required" onChange={(e) => onChangeInput(e)}/>
           </div>
              <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="Password" required="required" onChange={(e) => onChangeInput(e)} />
               </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                 </div>
                 <div className="form-group">
                  <input type="text" className="form-control" name="image" placeholder="Enter Images"  onChange={(e) => onChangeInput(e)} />
                 </div>
                  <div className="form-group">
                    <label className="checkbox-inline"><input type="checkbox" required="required"/> I accept the <Link to="#">Terms of Use</Link> &amp; <Link href="#">Privacy Policy</Link></label>
                  </div>
                    <div className="form-group text-center">
                      <button id="but" type="submit" className="btn btn-primary btn-lg w-100"  onClick={(e) => onSubmit(e)}>Sign Up</button>
                    </div>
          </form>


          
          <div class="text-center">Already have an account? <Link to="/login">Login here</Link></div>
          </div>  
      </>

    )
}
