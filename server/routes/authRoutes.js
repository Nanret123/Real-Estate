import express from "express";
import { createUser, bookVisit, getBookings, cancelBooking, favorites, allFavorites } from "../controllers/auth.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/register", jwtCheck,createUser);
router.post("/book/:id", jwtCheck,bookVisit);
router.get("/bookings", jwtCheck,getBookings);
router.post("/cancelbooking/:id", jwtCheck ,cancelBooking);
router.post("/favorites/:id", jwtCheck,favorites);
router.post("/favorites", jwt,allFavorites);

export {router as authRoutes}