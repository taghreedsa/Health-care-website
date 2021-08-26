const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    email : {
        type :String , 
        required :true ,
    },
    password : {
        type :String , 
        required :true
    } , 
    name : {
        type :String , 
        required :true
    }, 
    image :{
        type: String
    },
    userrole :{
        type : String,
        default : "regular"
    },
    articles : 
        [{type : mongoose.Schema.Types.ObjectId , ref: 'Article'}],
    
        favoriteArticales:[{type : mongoose.Schema.Types.ObjectId , ref: 'Article'}],
    

} , {timestamps :true})


const User = mongoose.model('user' , userSchema)
module.exports = User