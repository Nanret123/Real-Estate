import React from 'react';
import { popularResidencies } from "../../Data.jsx";
import {Link} from "react-router-dom";
import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import useProperties from "../../hooks/useProperties.jsx";
import { PuffLoader } from "react-spinners";
import Property from "../Property/Property.jsx";

const Residencies = () => {

 const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};

  const { data, isError, isLoading } = useProperties();

   if(isError){
   	return (<div>
   		<span>Error While Fetching data</span>
   	</div>)
   };

   if(isLoading){
   	<div>
   		<PuffLoader
          height="80"
          width="80"
          radius={1}
          color="84066ff"
          aria-label="puff-loading"
   		/>
   	</div>
   }

	return (
		<section className="property">
			<div className="center-left">
				<h2>Popular Residencies</h2>
			</div>

			<div className="property-content">
				{popularResidencies.slice(0, 8).map((card, i) => (
           	<Property {...card} key={i} />
          					))}
					</div>

			<div className="center-btn">
				<Link to="" className="btn">View All Properties</Link>
			</div>
		</section>
	)
}

export default Residencies;
