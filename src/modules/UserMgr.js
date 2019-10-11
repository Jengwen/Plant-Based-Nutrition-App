const remoteURL = "http://localhost:5002"

export default {
  // bring back one user's account information
  getOne(id) {
    return fetch(`${remoteURL}/users/${id}`).then(result => result.json())
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