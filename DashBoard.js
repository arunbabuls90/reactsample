
import React from 'react';
import axios from 'axios';
import WeatherDetails from './Weather/WeatherDetails';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      EmployeeName: '',
      City: '',
      Email: '',
      Password: '',
      Department: ''
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:50963/Api/login/GetDetail`)
      .then(res => {
        const employees = res.data;
        this.setState({ employees });
        console.log(employees);
      })
  }

  redirectLoginPage = (e) =>
  {
    this.props.history.push("/Login");
  }
  render() {

    return (
      <>
<nav class="navbar navbar-inverse">
<div class="container-fluid">
    <div class="navbar-header">
   
    </div>
    <ul class="nav navbar-nav">
     
      <li><a href="#"  onClick={this.redirectLoginPage}>Login</a></li>
    
      
    </ul>
  </div>
</nav>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <li className="nav-item">
                      <div class="container">
		                  <div className="container-fluid">
                        <div className="row well">
                          <div class="col-sm-3 text-center"> </div>
                          <WeatherDetails></WeatherDetails>
                        </div>
                        </div>
                      </div>
                    </li>
                  </li>
                </ul>
              </div>
            </nav>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-10 px-15">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2" >Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group mr-2">

                  </div>

                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>EmployeeName</th>
                      <th>City</th>
                      <th>Email</th>
                      <th>Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.employees.map(person => <p>{person.Id}</p>)}</td>
                      <td>{this.state.employees.map(person => <p>{person.EmployeeName}</p>)}</td>
                      <td>{this.state.employees.map(person => <p>{person.City}</p>)}</td>
                      <td>{this.state.employees.map(person => <p>{person.Email}</p>)}</td>
                      <td>{this.state.employees.map(person => <p>{person.Department}</p>)}</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </main>
          </div>

        </div>
      </>
    );

  }
};
export default Contact;
