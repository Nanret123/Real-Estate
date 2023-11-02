import React, {useState, useContext, useEffect} from 'react';
import {AiOutlineHeart} from "react-icons/ai";
import useAuthCheck from "../../hooks/useAuthCheck.jsx";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/userContext.jsx";
import { toast } from "react-toastify";
import { updateFavorites, checkFavorites } from "../../utils/common.jsx";
import { toFav } from "../../utils/api.js";


const Heart = ({id}) => {
  const [color, setColor ] = useState("white");
  const { validateLogin } = useAuthCheck();
  	const { user } = useAuth0();
    const { userDetails: { token, favorites}, setUserDetails } = useContext(UserDetailContext);

  const {mutate} = useMutation({
  	mutationFn: () => toFav(id, user?.email, token),
  	onSuccess: () => {
			setUserDetails(prev => ({
				...prev,
				favorites: updateFavorites(id, prev.favorites)
			}));
			toast.success("Booking Cancelled", {position: "bottom-right"})
		}
  });

  useEffect(() => { 
    setColor(()=>checkFavorites(id, favorites))
  }, [favorites])


  const handleLike = () => {
   if(validateLogin()){
   	setColor(prev => prev === "#fa3e5f" ? "white" : "#fa3e5f")
   }
  };

	return (
		<AiOutlineHeart className="heart" size={24} color={color} onClick={(e) => {
			e.stopPropagation();
			handleLike();
		}} /> 
	)
}

export default Heart