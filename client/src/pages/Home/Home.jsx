import React from 'react';
import Hero from "../../components/Hero/Hero.jsx";
import Residencies from "../../components/Residencies/Residencies.jsx";
import About from "../../components/About/About.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import GetStarted from "../../components/GetStarted/GetStarted.jsx";


const Home = () => {
	return (
		<div>
			<div className="white-gradient">
			<Hero />
			</div>
          <Residencies />
          <About />
      <Contact />
      <GetStarted />
		</div>
			
	)
}

export default Home