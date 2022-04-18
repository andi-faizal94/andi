import * as express from "express";
import * as BlogController from "../../controllers/blog.controller";
import { imageUpload } from "../../middleware/multer";
const router = express.Router();

router.get("/blog", BlogController.index);
router.get("/blog/:id", BlogController.show);
router.post("/blog", imageUpload.single("image"), BlogController.store);
router.put("/blog/:id", BlogController.update);
router.delete("/blog/:id", BlogController.destroy);

export default router;
