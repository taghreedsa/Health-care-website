require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/user")
const Article = require('./models/articles')
const PORT = process.env.PORT || 5001;
const mongoose = require("mongoose");
/*-- Admin Modules  --*/
const AdminBro = require('admin-bro')
const AdminBroExpressjs = require('admin-bro-expressjs')
AdminBro.registerAdapter(require('admin-bro-mongoose'))

mongoose.connect(
  "mongodb+srv://taghreedsa:T1234567890s@cluster0.jf6nl.mongodb.net/helthcare?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify :true },
  () => {
    console.log("mongoDb is connect");
  }
);
/*-- Creat the admin and assign the models DB--*/
const adminBro = new AdminBro({
  resources: [User , Article],
  rootPath: '/admin',
})

/*-- For using the admin --*/
const router = AdminBroExpressjs.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

/*-- Running the localhost:5000/admin --*/

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/api/user", require("./routes/user"));
app.use("/api/articles", require("./routes/article"));


const path = require('path')
app.use(express.static(path.join(__dirname , "build")));
app.get("*" , (req,res ) =>{
res.sendFile(path.join(__dirname , "build" , "index.html"))
})
app.listen(PORT, () => console.log(`server running in ${PORT}`));


