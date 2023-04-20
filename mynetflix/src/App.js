import React from "react";
import "./App.css"
import LandingPage from "./Components/LandingPage";
import LogPage from "./Components/LogPage";
import {Route,Routes} from  "react-router-dom"
import NewUser from "./Components/RegisterUser/NewUser.js";
import SignInToAccount from "./Components/SignIn/SignInToAccount";
import TvShows from "./Components/Genre/TvShows";
import Movies from "./Components/Genre/Movies"
function App() {

  return (
    <div className="App">

      <Routes>
        <Route path= "/" element= {<LogPage/>} />
        <Route path= "/home" exact element = {<LandingPage/>} />
        <Route path= "/signin" exact element = {<SignInToAccount/>} />  
        <Route path= "/register" exact element = {<NewUser/>} />
        <Route path= "/tvshows" exact element ={<TvShows/>} />
        <Route path= "/movies" exact element ={<Movies/>} />

      </Routes>
 
    </div>
  );
}

export default App;
