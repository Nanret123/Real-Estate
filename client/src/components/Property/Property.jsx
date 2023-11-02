import React from 'react';
import {ImLocation2} from "react-icons/im";
import {BsFillHouseHeartFill} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";
import {Link} from "react-router-dom";
import "./Property.css";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart.jsx";


const Property = ({img, name, location, price, description, id}) => {
   const navigate = useNavigate();

	return (
			<article className="single-property" onClick={()=>navigate(`/property/${id}`)}>
		
		<Heart id={id} />
			<img src={img} alt="property details" />
			<footer>
				<div className="property-info">
					<h4>{truncate(name, {length: 80})}</h4>
					<h4 className="tour-price">{price} naira</h4>
				</div>
				<p> <ImLocation2 />  {location}</p>
				<p>{truncate(description, {length: 15})}</p>
			</footer>
		
	

		</article>
	)
}

export default Property;