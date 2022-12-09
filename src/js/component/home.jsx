import React, {useState} from "react";
import reactDom from "react-dom";



const Home = () => {
	const [color, setColor] = useState("");
	const [isActive, setIsActive] = useState(false);
	const handleClick = event => {
		setIsActive(current => !current);
	  };



	return (
		<div id="traffic-light">
			<div className={color == 'red' ? "bulb-red" : "bulb"} onClick={() => setColor("red")} />
			<div className={color == 'yellow' ? "bulb-yellow" : "bulb"} onClick={() => setColor("yellow")} />
			<div className={color == 'green' ? "bulb-green" : "bulb"} onClick={() => setColor("green")} />
			<button onClick={() => {
			
			}}>Click me to change the color</button>
		</div>
	);
};

export default Home;
