import React, {useContext, useEffect} from 'react';
import Header from "../Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import userContext from "../../context/userContext.jsx";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api.js";
import useFavorites from "../../hooks/useFavorites.jsx";
import useBookings from "../../hooks/useBookings.jsx";

const Layout = () => {

	useFavorites();
	useBookings()

	const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
	const { setuserDetails } = useContext(userContext);

	const { mutate } = useMutation({
		mutationKey: [user?.email],
		mutationFn: (token) => createUser(user?.email, token)
	})

   useEffect(()=> {

     const getTokenAndRegister = async () => {
        const res = getAccessTokenWithPopup({
        	authorizationParams: {
        		audience: "http://localhost:8000",
        		scope: "openid profile email"
        	}
        })
        localStorage.setItem("access_token", res)
      setuserDetails((prev)=> ({...prev, token: res}))
      mutate(res);
     }

       isAuthenticated && getTokenAndRegister()
   }, [isAuthenticated]);

	return (
		<>
			<div>
			<Header />
			   <Outlet />
      </div>
      <Footer />
		</>
	)
}

export default Layout