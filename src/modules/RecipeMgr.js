const remoteURL = "http://localhost:5002"

export default {
    //  get all of the recipe options back in an array
  getAllRecipes() {
return fetch(`${remoteURL}/recipes`).then(result => result.json())
  },
//   bring back a single recipe
  getOneRecipe(id) {
    return fetch(`${remoteURL}/recipes/${id}`).then(result => result.json())
  },
// save a recipe to the json server
post(newRecipe) {
    return fetch(`${remoteURL}/recipes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRecipe)
    }).then(data => data.json())
},
// delete a recipe from JSON
delete(id) {
    return fetch(`${remoteURL}/recipes/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },

}