import React from "react";
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EmployeeName: '',
      City: '',
      Email: '',
      Password: '',
      Department: '',
      nullCheck:false
    };
  }
  clickHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    const user = {
      EmployeeName: this.state.EmployeeName,
      City: this.state.City,
      Email: this.state.Email,
      Password: this.state.Password,
      Department: this.state.Department

    
    };
    if (this.state.EmployeeName === "" && this.state.City === "" && this.state.Email ==="" && this.state.Password === "" && this.state.Department ==="") {
      this.setState({ nullCheck:true});
    }

    axios.post(`http://localhost:50963/Api/login/InsertEmployee`, user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  cancel = () => {
    this.props.history.push("/Login");
  };

  render() {
    return (
      <div class="card-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign Up</h5>

                  <form className="form-signin">
                    <div className="form-label-group">
                      <input
                        type="txt"
                        name="EmployeeName"
                        value={this.state.EmployeeName}
                        onChange={this.clickHandler}
                        className="form-control"
                        placeholder="EmployeeName"
                        required
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-label-group">
                      <input
                        type="txt"
                        name="City"
                        value={this.state.City}
                        onChange={this.clickHandler}
                        className="form-control"
                        placeholder="City"
                        required
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-label-group">
                      <input
                        type="txt"
                        name="Email"
                        value={this.state.Email}
                        onChange={this.clickHandler}
                        className="form-control"
                        placeholder="Email"
                        required
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-label-group">
                      <input
                        type="txt"
                        name="Password"
                        value={this.state.Password}
                        onChange={this.clickHandler}
                        className="form-control"
                        placeholder="Password"
                        required
                      ></input>
                    </div>
                    <br></br>
                    <div className="form-label-group">
                      <input
                        type="txt"
                        name="Department"
                        value={this.state.Department}
                        onChange={this.clickHandler}
                        className="form-control"
                        placeholder="Department"
                        required
                      ></input>
                    </div>
                    <br></br>
                    <div className="container">
                      <div className="row well">
                        <div class="col-sm-3 text-center"> </div>
                        <button
                          className="btn btn-sm-10x btn-primary margin:5px text-uppercase text-center"
                          type="submit"
                          onClick={this.handleSubmit}
                        >
                          {" "}
                          Sign Up
                        </button>
                        <div>&nbsp;</div>
                        <button
                          className="btn btn-sm-10x btn-primary margin:5px text-uppercase text-center"
                          type="submit"
                          onClick={this.cancel}
                        >
                          Cancel
                        </button>
                        <div className="container"><br></br>
                      {this.state.nullCheck ? (
                      <h5 className="text-center text-danger">Please Enter Details</h5>
                       ):null }
                       </div>
                      </div>
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Home;
