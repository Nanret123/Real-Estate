import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaconfig.js";

export const createProperty = asyncHandler(async(req, res) =>{
const { title, description, price, image, address, county, city, facilities, userEmail} = req.body;
try{
	const residency = await prisma.residency.create({
		data: {
			 title, description, price, image, address, county, city, facilities, owner : { connect :{ email: userEmail}}
		}
	});
	res.status(201).json({message: "Residency created successfully", residency})

}catch(err){
	if(err.code === "P2002"){
		throw new Error("A residency with this address already exists!")
	}else{
		throw new Error(err.message);
	}
}
});

export const getAllResidencies = asyncHandler(async(req, res) => {
const residencies = await prisma.residency.findMany({
	orderBy:{
		createdAt: "desc"
	}
});
res.status(200).json(residencies);
}); 

export const getResidency = asyncHandler(async(req, res) => {
const {id} = req.params;
try{
	const residency = await prisma.residency.findUnique({
		where: {id: id}
	})
	res.status(200).json(residency);

}catch(err){
	throw new Error(err.message);
}
});