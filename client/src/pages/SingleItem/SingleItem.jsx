import React, { useContext, useState } from 'react';
import {AiTwotoneCar} from "react-icons/ai";
import { property } from "../../Data.jsx";
import {BsFillHouseHeartFill} from "react-icons/bs";
import {ImLocation2} from "react-icons/im";
import "./SingleItem.css";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../../utils/api.js";
import { PuffLoader } from "react-spinners";
import { FaBars, FaShower } from "react-icons/fa";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../../components/BookingModal/BookingModal.jsx";
import UserDetailContext from "../../context/userContext.jsx";
import { Button } from "@mantine/core";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import {removeBooking} from "../../utils/api.js";
import Heart from "../../components/Heart/Heart.jsx";

const SingleItem = () => {
    const pathname = useLocation();
	const id = pathname.split("/").slice(-1)[0];
    const {data, isLoading, isError} = useQuery(["residency", id], () => getProperty(id));
	const {img, address, city, country, location, price, description, facilities} = data;
	const [modalOpen, setModalOpen] = useState(false);
	const { validateLogin } = useAuthCheck();
	const { user } = useAuth0();
	 const { userDetails: { token, bookings}, setUserDetails } = useContext(UserDetailContext);

	const { mutate: cancelBooking, isLoading: cancelling} = useMutation({
		mutationFn: () => removeBooking(id, user?.email, token),
		onSuccess: () => {
			setUserDetails(prev => ({
				...prev,
				bookings: prev.bookings.filter(booking => booking?.id !== id)
			}));
			toast.success("Booking Cancelled", {position: "bottom-right"})
		}
	}); 
 
	 if(isError){
   	return (<div>
   		<span>Error While Fetching Property Details</span>
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
		<section className="single-wrapper">
		
			<div className="img-container">
				<Heart  id={id}/>				
				<img src={img} alt="house" />
			</div>
			<div className="house-details">
			<div className="name">
			   <MdLocationPin size={25} />
				<h4>{address} {city} {country}</h4>
				<h4 className="tour-price">{price} naira</h4>
			</div>
			<div className="facilities">
				<div className="facility">
					<FaShower size={20} color="#1F3E72" />
					<span>{facilities.bathrooms} Bathrooms</span>
				</div>
				<div className="facility">
					<AiTwotoneCar size={20} color="#1F3E72" />
					<span>{facilities.parkings} Parkings</span>
				</div>
				<div className="facility">
					<MdMeetingRoom size={20} color="#1F3E72" />
					<span>{facilities.bedrooms} Bedrooms</span>
				</div>
			</div>
				<p> <ImLocation2 className="icon" />  {location}</p>
				<p> <BsFillHouseHeartFill className="icon" /> {description}</p>
				{bookings?.map(booking => booking.id).includes(id) ? (
                   <>
                   	<Button
                   	variant="outline"
                   	w={"100%"}
                   	color="red" 
                   	onClick={() => cancelBooking()}
                   	disabled={cancelling} >
                   	<span>Cancel Booking</span>	
                   	</Button>
                   	<span>
                   		Your visit already booked for {bookings?.filter(booking => booking.id === id)[0].date}
                   	</span>
                   </>
					) :   (<button onClick={() => {
									validateLogin() && setModalOpen(true)
								}}>Book A Visit</button>)}
				<BookingModal open={modalOpen} setOpen={setModalOpen} propertyId={id} email={user?.email} />
			</div>
		</section>
	)
};

export default SingleItem;