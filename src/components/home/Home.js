import React, { Component } from 'react'
import {Button} from "react-bootstrap"
import Auth0Client from '../auth/Auth';
import "./home.css"
import "./veggie.jpg"
import logo from "./logo.png";

class Home extends Component {
  render() {
    return (
<>
<section id="login">
  <div id="logo-div">
<h1 id= "main-heading">Considering a Plant Based Diet? </h1>
 <img id="logo" src={logo} alt="leaf logo" />
</div>
</section>
<section>
<h2 id= "second-heading">How Do I Know What to Eat?</h2>
    <p id="info">Create an account to get a personalized nutrition report, recipes, and more.</p>
 {/* button that directs user to the registration at Auth0 */}
 <Button  id="register"
            variant="light"
            size="lg"
            onClick={() =>{Auth0Client.signIn()}}>Register Here</Button>
<p id="info">Already have an account? Log In Here</p>
{/* Button to verify log in credentials through Auth0 and redirect to user account dashboard */}
<Button  id="log-in-btn"
            variant="light"
            size="lg"
            onClick={() =>{Auth0Client.signIn()}}>Log In</Button>
</section>
</>
    )
  }
}

export default Home