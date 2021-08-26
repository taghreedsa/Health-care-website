
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory , Link} from "react-router-dom";
import "./Signup.css"
export default function AddPost(props) {


  /* =================
     Hooks State  
     ================= */

  const { _id} = props.auth.currentUser;
  const history = useHistory();
  const [post, setPost] = useState({ title: "", description: "" , markdown :"" , image:"", type:"sport" , userId: _id });


 /* =================
     Functions Handler 
     ================= */

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    console.log("this inside onchange input " , name , value)
    setPost({
      ...post,
      [name]: value,
    });
  };
  // const onChangeSelect = (event) => {
  //   const { name, option } = event.target;
  //   setPost({
  //     ...post,
  //     [name]: option,
  //   });
  // };
  // ==========================================
  const onSubmit=(event)=>{
    event.preventDefault();
    console.log(post)
    axios
      .post("http://localhost:5000/api/articles/new ", post)
      .then((res) => {
          console.log(res)
          history.push("/profile");
      })
      .catch((err) => console.log(err));
  }
  // =============================================



   /* ===================
     Form to add new post  
     =================== */
    return (
        <>

    <div class="signup-form">
        
         
    <form >

          <h2>Add Post</h2>
          <div className="form-group">
              <input type="text" className="form-control" name="title" id="title" required="required" onChange={(e) => onChangeInput(e)}/>
          </div>

          <div className="form-group">
                  <input type="text" className="form-control" name="image" placeholder="Enter Images"  onChange={(e) => onChangeInput(e)} />
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1" name = "type"  onChange={(e) => onChangeInput(e)}>
            <option value ="sport">Sport</option>
            <option value="foods">Foods</option>
            <option value ="mental health">Mental Health</option>
     
          </select>
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <textarea name="description" id="description" class="form-control" onChange={(e) => onChangeInput(e)}></textarea>
          </div>

          <div class="form-group">
             <label for="markdown">Content</label>
             <textarea required="required" name="markdown" id="markdown" class="form-control" onChange={(e) => onChangeInput(e)}></textarea>
          </div>

          <div className="form-group text-center">
              <button id="but" type="submit" className="btn btn-primary btn-lg w-100" onClick={(e)=> onSubmit(e)}>Create Post</button>
          </div>

    </form>
                  {/* <div class="text-center">Return To the profile page? <Link to="/login"> </Link></div> */}
    </div>  
      </>
    )
    
}
