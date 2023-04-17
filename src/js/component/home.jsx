import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//create your first component
const Counter = (props) => {
	
	return (
		<div className="counter text-center">
			<div className="clock">
			<FontAwesomeIcon icon={faClock} />
			</div>
			<div className="five"> {props.digitFive} </div>
			<div className="four"> {props.digitFour} </div>
			<div className="three"> {props.digitThree} </div>
			<div className="two"> {props.digitTwo} </div>
			<div className="one"> {props.digitOne}  </div>
		</div>
	);
};

Counter.propTypes = {
    one: PropTypes.number,
    two: PropTypes.number,
    three: PropTypes.number,
    four: PropTypes.number,
    five: PropTypes.number,
};

export default Counter;