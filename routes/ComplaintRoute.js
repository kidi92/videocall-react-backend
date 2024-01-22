import express from "express";
import { createComplaint } from "../controllers/ComplaintController.js";

const router = express.Router();

router.post("/complaint", createComplaint);

export default router;
