import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
	baseURL: "http://localhost:8080"
});

export const getAllProperties = async() => {
try{
  const response = await api.get("/property/residencies", {
  	timeout: 10 * 1000,
  })
  if(response.status === 400 || response.status === 500){
  	throw response.data;
  } return response.data;
}catch(error){
	toast.error("Something went wrong");
	throw error;
}
};

export const getProperty = async(id) => {
try{
  const response = await api.get(`/property/${id}`, {
    timeout: 10 * 1000,
  })
  if(response.status === 400 || response.status === 500){
    throw response.data;
  } return response.data;
}catch(error){
  toast.error("Something went wrong");
  throw error;
}
};

export const createUser = async(email, token) => {
try{
  const response = await api.post(`/auth/register`, {email}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  if(response.status === 400 || response.status === 500){
    throw response.data;
  } return response.data;
}catch(error){
  toast.error("Something went wrong");
  throw error;
}
};

export const bookVisit = async (date, propertyId, token, email) => {
try{
   await api.post(`/auth/book/${propertyId}`, {
     email, id: propertyId, date: dayjs(date).format("DD/MM/YYYY")
   },{
     headers: {
      Authorization: `Bearer ${token}`
    }
   })
}
catch(error){
  toast.error("Something went wrong");
  throw error;
}
};

export const removeBooking = async(id, email, token) => {
  try{
   await api.post(`/auth/cancelbooking/${id}`, {email}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
   })
  } catch(error){
  toast.error("Something went wrong");
  throw error;
}
};

export const toFav = async(id, email, token) => {
  try{
   await api.post(`/auth/favorites/${id}`, {email}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
   })
  }catch(error){
  toast.error("Something went wrong");
  throw error;
}
}

export const getAllFav = async(email, token) => {
  if(!token) return
try{
  const res = await api.post(`/auth/favorites`, {email}, {
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  return res.data["favoriteResidenciesId"]
}catch(error){
  toast.error("Something went wrong");
  throw error;
}
};

export const getAllBookings = async (email, token) => {
  if(!token) return
try{
  const res = await api.post(`/auth/bookings`, {email}, {
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  return res.data["bookedVisits"]
}catch(error){
  toast.error("Something went wrong");
  throw error;
}
};

export const createResidency = async (data, token) => {
try{
const res = await api.post(`/property/create`, {data}, {
  headers:{
      Authorization: `Bearer ${token}`
    }
})
}
catch(error){
  toast.error("Something went wrong");
  throw error;
}
};
