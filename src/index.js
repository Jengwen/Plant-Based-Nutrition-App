import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Nutrition from './components/Nutrition'

ReactDOM.render(
  <Router>
    <Nutrition />
  </Router>
  , document.getElementById('root'))
