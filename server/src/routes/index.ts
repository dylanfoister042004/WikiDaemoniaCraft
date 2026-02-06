import { Router } from "express";
import wiki from "./wiki";

const router = Router();

router.use("/wiki", wiki);

export default router;
