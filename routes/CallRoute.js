import express from "express";
import { createCall, getCall, getCallHistory, getCallStatus } from "../controllers/CallController.js";

const router = express.Router();

router.get("/callstatus", getCallStatus);
router.get("/callhistory", getCallHistory);
router.post("/createcall", createCall);


export default router;
