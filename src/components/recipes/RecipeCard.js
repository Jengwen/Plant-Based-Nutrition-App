//import the components we will need
import React, { Component } from "react";
import { Button, CardDeck, Card } from "react-bootstrap";
import "./Recipe.css";

class RecipeCard extends Component {

  render() {
    // return reusable recipe card to display recipe micro links
    return (
      <div className="card">
        <div className="card-content" id="card-content">
          <h3>
            {" "}
            <span className="card-recipe">{this.props.recipeProp.label}</span>
          </h3>
<CardDeck>
  <Card>
  <Card.Img variant="top" height= {500} width= {300} src={this.props.recipeProp.imageUrl} />
    <Card.Body>
      <Card.Title>{this.props.recipeProp.label}</Card.Title>
      <Card.Text>
      <Card.Link href={this.props.recipeProp.url}>See Recipe</Card.Link>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       {/* add delete button */}
       <Button
            variant="light"
            type="submit"
            id="delete-btn"
            size="lg"
            onClick={()=>{this.props.deleteRecipe(this.props.recipeProp.id)}}
          >
            Delete
          </Button>
    </Card.Footer>
  </Card>
</CardDeck>




        </div>
      </div>
    );
  }
}
export default RecipeCard;
