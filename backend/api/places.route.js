import express from "express";
import PlacesCtrl from "./places.controller.js";
const router = express.Router();

router.route("/").get(PlacesCtrl.apiGetPlaces);

export default router;
