import React from "react";

const FormWeather = props => (
	<form onSubmit={props.getWeather}>

		<div className="container-fluid">
                      <div className="row well">
                        <div class="col-sm-1 text-center"> </div>
		<input type="text"  className="form-control width-90%" name="city" placeholder="City..."/>
		<input type="text" className="form-control" name="country" placeholder="Country..."/>
		<button  className="btn btn-sm btn-primary  text-uppercase text-center">Get Weather</button>
		</div>
		</div>

	</form>
);

export default FormWeather;