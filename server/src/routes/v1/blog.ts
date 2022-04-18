import * as express from "express";
import * as BlogController from "../../controllers/blog.controller";
import { imageUpload } from "../../middleware/multer";
import {
  update,
  show,
  destroy,
  index,
  store,
} from "../../controllers/validator/blogvalidation";
const router = express.Router();

router.get("/blog", index, BlogController.index);
router.get("/blog/:id", show, BlogController.show);
router.post("/blog", store, imageUpload.single("image"), BlogController.store);
router.put("/blog/:id", update, BlogController.update);
router.delete("/blog/:id", destroy, BlogController.destroy);

export default router;
