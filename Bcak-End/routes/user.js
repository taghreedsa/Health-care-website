const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();




/* =====================
     To get all the users  
    =====================*/
router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.json({ msg: users });
    })
    .catch((err) => res.json({ msg: err }));
});





/* ===================
    Profile page 
   ===================*/
router.get("/profile/:id", (req, res) => {
  console.log(req.params.id)
  let userId = req.params.id
  User.findById(userId)
  .populate("favoriteArticales")
    .then((user) => {
      res.json({ user })
    }).catch((err) => {
      console.log(err)
    })
})

/* ===================
     Edit Profile
   ===================*/
router.get("/editprofile/:id",

  (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    User.findById(userId)
      .then(user => {
        res.json({ user })
      }).catch(err => console.log(err))


  });
 

  /* ===================
     Update the profile 
     compare between pass $
     bcrypted pass
     ===================*/
router.put("/editprofile/:id", (req, res) => {
  const userId = req.params.id;

  let updateUser = {
    name: req.body.name,
    email: req.body.email,
    image: req.body.image,
  }
  if (req.body.password != "") {
    updateUser.password = req.body.password
    console.log(updateUser)
    bcrypt.genSalt(function (err, salt) {
      console.log('salt: ', salt);
      bcrypt.hash(updateUser.password, salt, function (err, hash) {
        updateUser.password = hash;
        console.log("new pass", updateUser)

        User.findByIdAndUpdate(userId, updateUser, { useFindAndModify: true })
          .then(user => {
            bcrypt.compareSync(req.body.password, user.password)
            res.json({ user });
          }).catch(err => console.log(err))
      });
    })
  } else {
    User.findByIdAndUpdate(userId, updateUser)
      .then(user => {
        res.json({ user });
      }).catch(err => console.log(err))
  }
});



/* ===================
      Create new User 
    ===================*/
router.post("/register", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    image: req.body.image
  };

  // If the email found in the DB
  newUser.email = newUser.email.toLowerCase();
  User.findOne({ email: newUser.email })
    .then((user) => {
      if (user) {
        res.json({
          msg: "The Email is Already there ",
        });
      }
      // if the email is not found in the DB
      else {
        var salt = bcrypt.genSaltSync(10);
        newUser.password = bcrypt.hashSync(req.body.password, salt);
        newUser.email = newUser.email.toLowerCase();
        User.create(newUser).then((user) => {
          res.json({ msg: "user hasbeen register", user: user });
        });
      }
    })
    .catch((err) => res.json({ msg: err }));
});


/* ===================
    Login page
    ===================*/



router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  email = email.toLowerCase();
  const user = await User.findOne({ email: email });
  // IF email isn't exist
  if (!user) {
    res.json({ msg: "email is not exist" });
  }
  // if email is exist
  else {
    // if password is correct
    if (bcrypt.compareSync(password, user.password)) {
      user.password = undefined;
      let payload = { user };
      let token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: 1000 * 60 * 60,
      });

      res.json({ msg: "user login ", token });
    }
    // / if password is not correct
    else {
      res.json({ msg: "password is not currect" });
    }
  }
});

router.get("/:token", (req, res) => {
  let token = req.params.token;

  jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
    if (err) return res.json({ msg: err });

    let user = decode;

    res.json({ msg: "user decoded", user });
  });
});





module.exports = router;