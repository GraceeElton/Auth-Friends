import React from "react";
import { axiosWithAuth } from "../auth/axios-auth";

class AddFriend extends React.Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
      },
    });
    // console.log(this.state);
  };

  submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", this.state.friend)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div>
        <h1>Add Friend!</h1>
        <form onSubmit={this.submit}>
          <label htmlFor="Name">
            <input
              placeholder="Name"
              name="name"
              type="text"
              onChange={this.handleChange}
            ></input>
          </label>
          <label htmlFor="Age">
            <input
              placeholder="Age"
              name="age"
              type="text"
              onChange={this.handleChange}
            ></input>
          </label>
          <label htmlFor="Email">
            <input
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
            ></input>
          </label>
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriend;
