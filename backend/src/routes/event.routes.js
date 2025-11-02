import { Router } from "express";
import { addNewEvent, deleteEvents, getSpecificEvents, updateEvents } from "../controller/event.controller.js";



const router=Router()

router.route("/").post(addNewEvent).get(getSpecificEvents).patch(updateEvents).delete(deleteEvents)

export default router