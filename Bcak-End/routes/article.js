const express = require('express');
const router = express.Router()
const Article = require('./../models/articles')
const User = require("../models/user")


   /* ===================
       Show All posts
     ===================*/
  router.get("/", (req, res) => {
    Article.find()
      .then((articles) => {
        
        res.json( articles );
      })
      .catch((err) => res.json({ msg: err }));
    });


  /* ===================
    To Create new post 
    ===================*/
 router.post("/new", (req, res) => {
    const newArticale = {
      title: req.body.title,
      description: req.body.description,
      markdown: req.body.markdown,
      type : req.body.type,
      image : req.body.image,

    };
    let userId = req.body.userId
    Article.create(newArticale)

    .then(article => {
        

    User.findByIdAndUpdate(userId , {$push:{articles:article}})
        .then((user)=>{
          res.json({user})
        })
    })
    .catch(err => console.log(err))

})

router.post("/", (req, res) => {

  let articleId = req.body.articleId
  let userId = req.body.userId
  console.log(articleId)



  User.findByIdAndUpdate(userId, { $addToSet: { favoriteArticales: articleId } }, { new: true })
      .then(user => {


          res.json({ msg: "article added to your favorite Articles",favoriteArticales: user.favoriteArticales })


      })

})





module.exports = router