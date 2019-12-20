const remoteURL = "http://localhost:5001"

export default {
//  get all of the mealTypes back in an array
  getAllMealTypes() {
return fetch(`${remoteURL}/mealTypes`).then(result => result.json())
  },
}