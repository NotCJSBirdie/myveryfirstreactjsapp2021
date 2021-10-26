import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { favoritecolor: "blue" };
	}
	changeColor = () => {
		this.setState({ favoritecolor: "red" });
	};
	render() {
		return (
			<div>
				<h1> My favorite color is {this.state.favoritecolor}</h1>
				<button type="button" onClick={this.changeColor}>
					Change Color!
				</button>
			</div>
		);
	}
}

ReactDOM.render(<Header />, document.getElementById("root"));
