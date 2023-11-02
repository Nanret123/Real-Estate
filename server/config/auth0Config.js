import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
	audience: "http://localhost:8000",
	issuerBaseURL: "http://dev-bzqgl3ggb31qg4vd.us.auth0.com",
	tokenSigningAlgo: "RS256"
})

export default jwtCheck;