import React, { Component } from 'react'
import {Button} from "react-bootstrap"
import Auth0Client from '../auth/Auth';
import "./home.css"

class Home extends Component {
  render() {
    return (
<>
{/* headers and log in opportunities  */}
<section id="login">
<h1 id= "main-heading">Considering a Plant Based Diet?</h1>
<h2 id= "second-heading">How Do I Know What to Eat?</h2>
    <p>Create an account to get a personalized nutrition report, recipes, and more.</p>
 <Button  id="register"
            variant="light"
            size="lg"
            onClick={() =>{Auth0Client.signIn()}}>Register Here</Button>
<p>Already have an account? Log In Here</p>
<Button  id="log-in"
            variant="light"
            size="lg"
            onClick={() =>{Auth0Client.signIn()}}>Log In</Button>
</section>
</>
    )
  }
}

export default Home