import React from 'react';
import {properties} from "../../Data.jsx";
import Property from "../../components/Property/Property.jsx";
import useProperties from "../../hooks/useProperties.jsx";
import UserDetailContext from "../../context/userContext.jsx";
import { PuffLoader } from "react-spinners";

const Favorites = () => {

	const { data, isError, isLoading} = useProperties();
  const { userDetails: { favorites }} = useContext(UserDetailContext);
  
  if(isError){
    return (
       <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    	)
  };

  if(isLoading){
  	return (
       <div>
       	<PuffLoader height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading" />
       </div>
  		)
  }
		return (
			<section className="bookings">
				<div className="p-title">
			<h2 >Your Favorites</h2>
		<div className="underline"></div>
		</div>
		<div className="items">
			{properties.map(item => {
				return (<Property key={item.id} {...item} />)
		})}
		</div>
			</section>	
	)
};

export default Favorites