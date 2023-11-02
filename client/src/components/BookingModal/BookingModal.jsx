import React, { useState, useContext } from 'react';
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/userContext.jsx";
import { bookVisit } from "../../utils/api.js";
import { toast } from "react-toastify";
import dayjs from "dayjs";


const BookingModal = ({open, setOpen, email, propertyId}) => {
  const [value, setValue] = useState(null);
  const { userDetails: { token}, setUserDetails } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("You have booked your visit successfully", {
    	position: "bottom-right"
    });
    setUserDetails((prev) => ({
       ...prev, 
       bookings:[...prev.bookings, {
       	id: propertyId, date: dayjs(value).format("DD/MM/YYYY")
       }]
    }))
  };

  const {mutate, isLoading} = useMutation({
  	mutationFn: () => bookVisit(value, propertyId, email, token),
  	onSuccess: () => handleBookingSuccess(),
  	onError: () => ({response}) => toast.error(response.data.message),
  	onSettled: () => setOpen(false)
  })

	return (
		<Modal opened={open} onClose={() => setOpen(false)} title="Select your date of visit" centered>
			<div>
				<DatePicker value={value} onChange={setValue} minDate={new Date()} />
				<Button disabled={!value || isLoading} onClick={() => mutate()}>Book a visit</Button>
			</div>
		</Modal>
	)
}

export default BookingModal