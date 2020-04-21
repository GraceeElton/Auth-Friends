import React from "react";
import { axiosWithAuth } from "../auth/axios-auth";

class FriendList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
    console.log(this.getData);
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log({ res });
        this.setState({ friends: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>List of Friends</h1>
        <div>
          {this.state.friends.map((item) => (
            <div key={item.id}>
              <h2>{`ID : ${item.id}`}</h2>
              <h2>{`Name :${item.name}`}</h2>
              <h2>{`Age :${item.age}`}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FriendList;
