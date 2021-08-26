
import React , {useEffect , useState}  from "react";
import { Col, Container, Form, Row } from 'react-bootstrap'
import axios from "axios";
import "./UserProfile.css"
import "./liks.css"

import { Link } from "react-router-dom";

export default function Profile(props) {
  

        /*-- Auth by the user ID--*/
        const { _id} = props.auth.currentUser;


         /* =================
            Hooks & state
          ================= */
        const [user , setUser] = useState(null)
        useEffect(() => {
        axios.get(`http://localhost:5000/api/user/profile/${_id}`)
          .then(data => {
           console.log(data)
           setUser(data.data.user)

          })
    
      }, [])
      console.log(user)
const Allfavorite=!user?"":user.favoriteArticales.map((ele)=>{
    return ( 
        <Col sm="4" md="4" >
                <div  class="card mb-5" >
                    <Link to={`/posts/${ele._id}`} class="link-card">
                        <img src={ele.image} class=" w-100 h-400"  alt="..."/>
                            <div   class="card-body">
                                <h5 class="card-title"><span>{ele.title}</span> <i className="fa fas fa-leaf"></i></h5> </div></Link>
                                </div>  
                                
    </Col>
    )
 
    
})

    return ( 

         /* =================
            Form Profile 
        ================= */
        user ? 
    <div class="row py-5 px-4 main">
        <div class="col-md-5 mx-auto">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 cover">
                <div class="media align-items-end profile-head">
                    <div class="profile mr-3"><img src={user.image} alt="..." width="130" class="rounded mb-2 img-thumbnail"/><a href={`/editprofile/${_id}`} class="btn btn-outline-dark btn-sm btn-block">Edit profile</a></div>
                    <div class="media-body mb-5 text-white">
                        <h4 class="mt-0 mb-0">{user.name}</h4>
                        <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>{user.email}</p>
                    </div>
                </div>
            </div>
            <div class="bg-light p-4 d-flex justify-content-end text-center">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
    <h5 class="font-weight-bold mb-0 d-block">{user.articles.length}</h5><small class="text-muted"> <i class="fa fas fa-image mr-1"></i>Posts</small>
                    </li>
                       <li>
                       <a href="/new" class="btn btn-outline-dark btn-sm btn-block">add posts</a>
                       </li>
                </ul>
            </div>
            <div class="py-4 px-4">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Recent Posts</h5><a href="/articles" class="btn btn-link text-muted">Show all</a>
                 </div>
            <Row >
            
                {Allfavorite}  
                </Row>  
                
            </div>
        </div>
    </div>
</div> : <div> Loading .. </div> 
    )};

