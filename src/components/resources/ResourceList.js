import React, { Component } from "react";
import Microlink from "@microlink/react";
import "./Resource.css"
class ResourceList extends Component {

  render() {
    return (
        <>
      <div className="documentaries">
          <h3 id="resource-header">Documentaries</h3>
        <div className="documentaries-content">
          <Microlink url="https://www.whatthehealthfilm.com/" size="large" />
          <Microlink url="https://gamechangersmovie.com/" size="large" />
        </div>
      </div>
           <div className="resource">
           <h3 id="resource-header">Other Resources</h3>
           <div className="resource-content">
             <Microlink url="https://nutritionfacts.org/" size="medium" />
           </div>
         </div>
         </>
    );
  }
}
export default ResourceList;