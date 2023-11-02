import React, {useState} from 'react';
import "./Properties.css";
import Property from "../../components/Property/Property.jsx";
import {properties} from "../../Data.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import Search from "../../components/Search/Search.jsx";
import useProperties from "../../hooks/useProperties.jsx";
import { PuffLoader } from "react-spinners";

const Properties = () => {
	const { data, isError, isLoading } = useProperties();
   const [loading, setLoading] = useState(false);
   const [ filter, setFilter] = useState("");

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
		<section className="properties">
		<div className="p-title">
			<h2 >Our Properties</h2>
		<div className="underline"></div>
		</div>
			<Search filter={filter} setFilter={setFilter} />
		<div className="items">
			{
        properties.filter(
        	(property) => property.title.toLowerCase().includes(filter.toLowerCase()) || property.city.toLowerCase().includes(filter.toLowerCase()) || property.country.toLowerCase().includes(filter.toLowerCase()))
				.map(item => {
				return (<Property key={item.id} {...item} />)
		})
			}
		</div>
			
		</section>
	)
}

export default Properties