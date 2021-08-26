const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    image:{
      type:String
    },
    description: {
      type: String
    },
    markdown: {
      type: String,
      required: true
    },

    type : {
      type :String,
      required :true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
   
})




var Article = mongoose.model('Article', articleSchema)
module.exports = Article;