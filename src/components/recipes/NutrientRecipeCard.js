//import the components we will need
import React, { Component } from "react";
import { Card, CardDeck, Button  } from "react-bootstrap";


class NutrientRecipeCard extends Component {

  render() {
    // render the recipe card with recipe links
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Title:{" "}
            <span className="card-recipe">{this.props.nutrientRecipeProp.recipe.label}</span>
          </h3>
          <CardDeck>
  <Card>
<Card.Img variant="top" height= {500} width = {500} src={this.props.nutrientRecipeProp.recipe.imageUrl} />
    <Card.Body>
      <Card.Title>{this.props.nutrientRecipeProp.recipe.label}</Card.Title>
      <Card.Text>
      <Card.Link href={this.props.nutrientRecipeProp.recipe.url}>See Recipe</Card.Link>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       {/* add delete button */}
       <Button
            variant="light"
            type="submit"
            id="delete-btn"
            size="lg"
            onClick={()=>{this.props.deleteRecipe(this.props.nutrientRecipeProp.id)}}
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
export default NutrientRecipeCard;