import express from "express";
import carController from "../controllers/car.controller.js";

const carRouter = express.Router();


// video list router
carRouter.get('/car-list', carController.carList);

export default carRouter
