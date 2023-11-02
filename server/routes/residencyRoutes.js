import express from "express";
import { createProperty, getAllResidencies, getResidency } from "../controllers/residency.js";
import jwtCheck from "../config/auth0Config.js";
const router = express.Router();

router.post("/create",jwt ,createProperty);
router.get("/residencies",getAllResidencies);
router.get("/:id",getResidency)

export { router as residencyRoutes}
