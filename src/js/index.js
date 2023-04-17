//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/counter.jsx";

//render your react application

let counter = 0

setInterval(() => {
    
    const five = Math.floor (counter / 10000) % 10
    const four = Math.floor (counter / 1000) % 10
    const three = Math.floor (counter / 100) % 10
    const two = Math.floor (counter / 10) % 10
    const one = Math.floor (counter / 1) % 10
    counter++;
    
    ReactDOM.render(<Counter 
        digitOne={one}
        digitTwo={two}
        digitThree={three}
        digitFour={four}
        digitFive={five}
        />
        , document.querySelector("#app"));

}, 1000);
