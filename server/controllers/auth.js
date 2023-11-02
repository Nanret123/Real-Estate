import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaconfig.js";

export const createUser = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const isUser = prisma.user.findUnique({ where: { email: email } })

    if (!isUser) {
        const user = await prisma.user.create({ data: req.body });
        res.status(201).json({ message: "user registered successfully", user });
    } else {
        res.status(201).json({ message: "user already exists" });
    }

});

export const bookedVisit = asyncHandler(async (req, res) => {
    const { email, date } = req.body;
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
            select: { bookedVisits: true }
        })
        if (user.bookedVisits.some(visit => visit.id === id)) {
            return res.status(400).json({ message: "This residency has already been booked by you!" })
        } else {
            await prisma.user.update({
                where: { email: email },
                data: {
                    bookedVisits: { push: { id, date } }
                }
            })
            res.status(200).json({ message: "Your visit has been booked suucessfully" })
        }
    } catch (err) {
        throw new Error(err.message)
        err.status = 500;
    }
});

export const getBookings = asyncHandler(async (req, res) => {
    const { email } = req.body;
    try {
        const bookings = await prisma.user.findUnique({
            where: { email: email },
            select: { bookedVisits: true }
        })
        res.status(200).json(bookings)
    } catch (err) {
        throw new Error(err.message);
    }
});

export const cancelBooking = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
            select: { bookedVisits: true }
        });
        const index = await user.bookedVisits.findIndex(visit => visit.id === id);
        if (index === -1) {
            res.status(404).json({ message: "Booking not found" });
        } else {
            user.bookedVisits.splice(index, 1);
            await prisma.user.update({
                where: { email },
                data: { bookedVisits: user.bookedVisits }
            })
          res.status(204).json({ message: "Booking cancelled successfully" });
        }
    }catch (err) {
        throw new Error(err.message);
    }
});

export const favorites = asyncHandler(async(req, res) => {
const { email } = req.body;
const { id } = req.params;
try{
    const user = await prisma.user.findUnique({
            where: { email: email },
        });
    if(user.favResidenciesId.includes(id)){
    	const updatedUser = await prisma.user.update({
    		where: { email },
    		data: { favResidenciesId: { set: user.favResidenciesId.filter(item => item !== id)}}
    	});
    	res.status(200).json({message: "Removed from favorites", user: updatedUser});
    }else{
      const updateUser = prisma.user.update({
      	where: { email },
      	data: {
      		 favResidenciesId: { push: id }
      	}
      });
    res.status(200).json({message: "Added to favorites", user: updateUser});
    }
}catch (err) {
        throw new Error(err.message);
    }
});

export const allFavorites = asyncHandler(async(req, res) => {
const { email } = req.body;
try{
	const favorites = await prisma.user.findUnique({
		where: { email },
		select: { favResidenciesId: true }
	});
	res.status(200).json(favorites);
}catch (err) {
        throw new Error(err.message);
    }
});