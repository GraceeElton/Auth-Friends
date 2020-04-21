import React from "react";
import { axiosWithAuth } from "../auth/axios-auth";

class FriendList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData;
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
      });
  };
}
