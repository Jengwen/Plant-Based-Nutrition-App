const remoteURL = "http://localhost:5002"

export default {
    //  get all of the nutrients back in an array
  getAllNutrients() {
return fetch(`${remoteURL}/nutrients`).then(result => result.json())
  }
}