import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import "../components/Signup.css"
import axios from 'axios'

export default function Show(props) {

  /* ===================
     Hooks & State
     ===================*/
    //  const [posts, setPosts] = useState([]);
    //  const { title } = useParams();

     const {id} = useParams()
     const [selectArticle , setSelectArticle]= useState(props.selectArticle)
     const {title,description, type ,markdown ,image  } = selectArticle
    /* =====================
      To Fetch all the posts
     =======================*/
    useEffect(() => {
      axios.get('http://localhost:5000/api/articles')
        .then((res) => {

          let article = res.data.find(ele => ele._id == id)
          setSelectArticle(article)
        
        });
    }, []);

    const addArticleTOFavorite = () =>{
      axios.post('http://localhost:5000/api/articles' , {articleId :selectArticle._id ,  userId :props.user._id  })
      .then(data =>{

          // data.favoriteMovies
          localStorage[props.user._id] = JSON.stringify(data.data.favoriteArticales)
          console.log(data)
      })

  }



    /*-- Params usage -- */
  


    return (

      
      /* ===================
      Card For Display 
     ===================*/
      <>
        (
        <Container className="mt-5" style={{color:"black"}} >
            <Row >
                <Col md="6" >
                <img width="100%"  src={image} alt="" srcset="" />
                </Col>
                <Col md="6">
        <h2>{title}</h2>
                    <h6> {description}</h6>
                    <h4>{type}</h4>
                    <p>{markdown}</p>
                </Col>
            </Row>
            <Button onClick ={()=> addArticleTOFavorite()} id="but" className="outline-light" > <i class="fa fa-heart-o" aria-hidden="true"></i></Button>
        </Container>
    
        
        )
      </>
    )}
    
 
    
