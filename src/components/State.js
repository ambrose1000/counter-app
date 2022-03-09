import React from 'react';

class State extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			message: 'Welcome to kursas Limited'
		}
	}

	handleButton(){
		this.setState( {
			message:'Thank You for visitting'
		} )
	}
	render() {
		return(
			<div>
				<h1> {this.state.message} </h1>
				<br /> 
				<button onClick = { () => this.handleButton() } > ENTER A CLICK</button>
			</div>


			)
	};


}

export default State;