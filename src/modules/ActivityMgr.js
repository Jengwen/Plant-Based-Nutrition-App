const remoteURL = "http://localhost:5002"

export default {
    //  get all of the activity level options back in an array
  getAll() {
return fetch(`${remoteURL}/activityLevels`).then(result => result.json())
  }
}