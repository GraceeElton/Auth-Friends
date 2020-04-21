import React from "react";
import { axiosWithAuth } from "../auth/axios-auth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/friendlist");
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            placeholder="User- Name"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
