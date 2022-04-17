import * as express from "express";
import * as BlogController from "../../controllers/blog.controller";

const router = express.Router();

router.get("/blog", BlogController.index);
// router.get("/user/:id", UserController.show);
router.post("/blog", BlogController.store);
router.put("/blog/:id", BlogController.update);
router.delete("/blog/:id", BlogController.destroy);

export default router;
