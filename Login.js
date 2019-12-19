import React from "react";
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginval: true,
      labeldis:false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitValidation = (e) => {
    e.preventDefault();
    if (this.state.username === "admin" && this.state.password ==="admin") {
      this.setState({ loginval: true,labeldis:true});
      this.props.history.push("/Dashboard");
    }
    else
    {
      this.setState({ labeldis:true});
    }
  };

  signUpValidation = () => {
  
 
    this.props.history.push("/Signup");
  
};


  render() {
    return (
      <div className="card-header">
       <h1 className="text-center text-success">Registration Sample</h1> 
      <div className="container">
        
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>

                <form className="form-signin">
                  <input
                    type="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.clickHandler}
                    className="form-control"
                    placeholder="User Name"
                    required
                  ></input>
                  <br></br>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.clickHandler}
                    className="form-control"
                    placeholder="Password"
                    required
                  ></input>

                  <br></br>
                  <div className="container">
                    <div className="row well">
                      <div className="col-sm-3 text-center"> </div>
                      <button
                        className="btn btn-sm-10x btn-primary margin:5px text-uppercase text-center"
                        type="submit"
                        onClick={this.submitValidation}
                      >
                      
                        Sign in
                      </button>
                      <div>&nbsp;</div>
                      <button
                        className="btn btn-sm-10x btn-primary margin:5px  text-uppercase text-center"
                        type="submit"
                        onClick={this.signUpValidation}
                      >
                  Sign Up
                      </button>
                      <div className="container"><br></br>
                      {this.state.labeldis ? (
                      <h5 className="text-center text-danger">Invalid Credential</h5>
                       ):null }
                      </div>
                    </div>
                  </div>
                </form>

                <div>


                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div> 
        
        </div>
      </div>
      </div>
    );
  }
}
export default Login;
