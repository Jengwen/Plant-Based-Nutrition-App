const remoteURL = "http://localhost:5001"

export default {
  // bring back one user's account information
  getOne() {
    return fetch(`${remoteURL}/users/${sessionStorage.getItem('credentials')}`).then(result => result.json())
  },
  // bring back embedded user information with their activity level
  getOneActive() {
    return fetch(`${remoteURL}/users/${sessionStorage.getItem('credentials')}/?_expand=activitylevel`).then(result => result.json())
  },
    //  send user detail updated information to json
  update(editedUser) {
    return fetch(`${remoteURL}/users/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUser)
    }).then(data => data.json());
  }
}