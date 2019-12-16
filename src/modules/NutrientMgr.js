const remoteURL = "http://localhost:5001"

export default {
    //  get all of the nutrients back in an array
  getAllNutrients() {
return fetch(`${remoteURL}/nutrients`).then(result => result.json())
  },
  // get recipes by specific nutrients
  getRecipebyNutrient (id) {
    return fetch(`${remoteURL}/recipe_nutrients/?nutrientId=${id}&_expand=recipe`)
    .then(result =>result.json())
  }
}