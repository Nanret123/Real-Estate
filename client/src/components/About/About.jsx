import React, { useState } from 'react';
import "./About.css";
import Aboutitem from "./Aboutitem.jsx";
import { values } from "../../Data.jsx";


const About = () => {


    return (
        <section className="about">
			<div className="about-img">
				<img src="/images/home.jpg" alt="house"/>
			</div>

			<div className="about-text">
				<h2>Help people find homes</h2>
				<p> We are always ready to help by providing the best services for you. We believe a good place can make your life better. </p>
				<div className="info">
					{values.map(item => {
						return <Aboutitem key={item.id} {...item} />
					})}
				</div>
          
			</div>
		</section>
    )
}

export default About;