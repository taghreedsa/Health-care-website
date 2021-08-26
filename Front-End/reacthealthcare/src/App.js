 /* ===================
      Import Statments  
     =================== */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AllArticales from "./components/AllArticales"
import SignUp from './components/SignUp';
import Login from "./components/LogIn";
import Profile from "./components/Profile";
import AuthRoute from "./components/AuthRoute"
import EditProfile from './components/EditProfile';
import AddPost from './components/AddPost';
import Show from "./pages/Show"

function App() {

   /* ===================
       Hooks $ State 
     =================== */
  const [dataLoading, setDataloading] = useState(false)
  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });
  const [selectArticle, setSelectArticle] = useState({});

   /* =====================
     Autntcation Function
     ===================== */
  const userLogin = () => {
    if (localStorage.jwtToken) {
      const jwtToken = localStorage.jwtToken;
      const currentUser = jwt_decode(jwtToken, "SECRET").user;
      setAuth({ currentUser, isLoggedIn: true });
    } else {
      setAuth({ currentUser: null, isLoggedIn: false });
    }

    setDataloading(true)
    console.log("The current User is: ", auth.currentUser);
  };

  useEffect(userLogin, []);

// ===============================================================



 /* ======================
     Routes Of the website
     ===================== */
  return (
    <div className="">
    { dataLoading &&
     <Router>

                  {/*---NavBar---*/}
          <NavBar isLoggedIn={auth.isLoggedIn} loginCallback={userLogin} />

                  {/*---To the user Profile---*/}
          <Route path="/profile">
            <AuthRoute 
            setAuth = {setAuth}
            auth={auth} />
          </Route>

                   {/*---To the Show page---*/}
                   <Route  path='/posts/:id'>
            <Show  setAuth = {setAuth}
            user = {auth.currentUser}
            selectArticle={selectArticle} 
             />
          </Route>

                    {/*---To the Edit user Profile---*/}
         <Route path = "/editprofile/:id">
           <EditProfile 
           auth={auth} />
         </Route>


                     {/*---To Create new post--*/}
         <Route path = "/new">
           <AddPost   auth={auth}  />
         </Route>


                      {/*---To show all posts---*/}
         <Route exact path="/articles">
           <AllArticales />
         </Route>

    
                       
                       {/*---To login page --*/}
        <Route path="/login" >
          <Login loginCallback={userLogin}/>
        </Route>



                       {/*---To signup page ---*/}
        <Route path="/SignUp" >
          <SignUp loginCallback={userLogin} />
        </Route>


                       {/*---To The home page ---*/}
        <Route exact path="/">
          <Home/>
        </Route>
      


        <Footer/>

    </Router>
    }
    </div>
  );
} 

export default App;
