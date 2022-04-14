import * as express from "express";
import User from "./v1/router";
const router = express.Router();

router.use("/v1", User);
router.use("/v1", Blog);

export default router;
