import { useState, Suspense } from 'react'
import './App.css';
import Home from "./pages/Home/Home.jsx";
import Properties from "./pages/Properties/Properties.jsx";
import SingleItem from "./pages/SingleItem/SingleItem.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Bookings from "./pages/Bookings/Bookings.jsx";
import Favorites from "./pages/Favorites/Favorites";
import Form from "./pages/Form/Form";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDetailContext from "./context/userContext.jsx";


function App() {
   //const [properties, setProperties] = useState([]);
   const queryClient = new QueryClient();
   const [userDetails, setUserDetails] = useState({
      favorites:[],
      bookings:[],
      token: null
   });

  return (
    <div className="App">
    <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<SingleItem />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Form />} />
        </Route>
       </Routes>
       </Suspense>
    </BrowserRouter>
    <ToastContainer />
    </QueryClientProvider>
    
    </UserDetailContext.Provider>
    
     

    </div>
         
  )
}

export default App
