
export default {
      //   bring back recipes based on search filters
  getRecipebyNutrient(nutrientCode) {
    return fetch(`https://api.edamam.com/search?q=health=vegan&app_id=9c8a4824&app_key=6216f6e809b80037d1337063990abdab&nutrients=${nutrientCode}`).then(result => result.json());
  },
  getRecipebyMealType(mealType) {
    return fetch(`https://api.edamam.com/search?q=${mealType}&app_id=9c8a4824&app_key=6216f6e809b80037d1337063990abdab&health=vegan`).then(result => result.json());
  },
  getRecipebyString(string) {
    return fetch(`https://api.edamam.com/search?q=${string}&app_id=9c8a4824&app_key=6216f6e809b80037d1337063990abdab&health=vegan`).then(result => result.json());
  },

}