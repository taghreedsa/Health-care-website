import React from 'react'
import { Link } from "react-router-dom";
import {Dropdown,DropdownButton} from 'react-bootstrap'
import "./OneCardArticale.css"
import {Col} from "react-bootstrap"
export default function OneCardArticle (props)  {
 
  
    return (
       
        <Col sm="4"md="4" >
           
                <div class="card mb-5">
                    <Link to={`/posts/${props.post._id}`} class="link-card">
                        <img src={props.post.image} class=" w-100 h-400" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title"><span>{props.post.title}</span></h5><p class="card-text"> {props.post.description}</p><p class="card-text"><span>{props.post.type}</span><small class="text-muted"><i class="fa fa-heart-o" aria-hidden="true"></i></small></p></div></Link>
                                </div>
    </Col>

    )
}
