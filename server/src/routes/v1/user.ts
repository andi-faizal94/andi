import * as express from "express";
import * as UserController from "../../controllers/user.controller";
import {
  update,
  show,
  destroy,
  index,
  store,
} from "../../controllers/validator/uservalidation";
const router = express.Router();

router.get("/user", index, UserController.index);
router.get("/user/:id", show, UserController.show);
router.post("/user", store, UserController.store);
router.put("/user/:id", update, UserController.update);
router.delete("/user/:id", destroy, UserController.destroy);

export default router;
