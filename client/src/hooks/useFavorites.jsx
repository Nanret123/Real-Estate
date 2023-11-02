import React, { useContext, useRef, useEffect } from "react";
import UserDetailContext from "../context/userContext.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import { getAllFav } from "../utils/api.js";

const useFavorites = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const queryRef = useRef();
  const { user } = useAuth0();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allFavorites",
    queryFn: () => getAllFav(user?.email, userDetails?.token),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, favorites: data })),
    enabled: user !== undefined,
    staleTime: 30000,
  });

  queryRef.current = refetch;

  useEffect(() => {
      queryRef.current && queryRef.current();
  }, [userDetails?.token])

  return <div></div>;
};

export default useFavorites;
