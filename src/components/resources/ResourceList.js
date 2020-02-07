import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import Microlink from "@microlink/react";
import "./Resource.css"
class ResourceList extends Component {

  render() {
    return (
        <>
        {/* links for documentaries */}
      <div className="documentaries">
          <h3 id="resource-header">Documentaries</h3>
        <div className="documentaries-content">
<CardDeck>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/56a13652bfe873bffd8ad2ce/1505944390427-UH8BAOBJ7LBES4YI4UQ8/ke17ZwdGBToddI8pDm48kG36iHKBEeTlBXGgOIIrvYRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwNcczxjZQzD0gATJnTyGxHVa96pZLHr6psaFMd-DWHtjp4duTIsTmTBLG4U1myiQM/wth__heroimage-optimized.jpg?format=500w" />
  <Card.Body>
    <Card.Title>What the Health Film</Card.Title>
    <Card.Text>

    </Card.Text>
    <Card.Link href="https://www.whatthehealthfilm.com/">See More Here</Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body>
    <Card.Title>Game Changers Movie</Card.Title>
    <Card.Text>

    </Card.Text>
    <Card.Link href="https://gamechangersmovie.com/">See More Here</Card.Link>
  </Card.Body>
</Card>
         </CardDeck>
        </div>
      </div>

           <div className="resource">
           <h3 id="resource-header">Other Resources</h3>
           <div className="resource-content">
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://nutritionfacts.org/app/themes/sage/dist/images/book/how-not-to-diet_10df4b4b.png" />
  <Card.Body>
    <Card.Title>Nutrition Facts</Card.Title>
    <Card.Text>

    </Card.Text>
    <Card.Link href="https://nutritionfacts.org/">See More Here</Card.Link>
  </Card.Body>
</Card>
           </div>
         </div>
         </>
    );
  }
}
export default ResourceList;