import express from "express";
import { Bookparking, FindParkingareasbyId, FindallParkingAreas, RegisterParkingArea } from "../controllers/ParkingController.js";


const ParkingRoutes = express.Router();
ParkingRoutes.post("/register",RegisterParkingArea)
ParkingRoutes.post("/findAll",FindallParkingAreas)
ParkingRoutes.get("/findById",FindParkingareasbyId)
ParkingRoutes.post("/bookParking",Bookparking)

export default ParkingRoutes;
