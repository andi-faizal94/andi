import * as multer from "multer";
import { existsSync, mkdirSync } from "fs";
import { extname } from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destination = "uploads/";
    if (!existsSync(destination)) {
      mkdirSync(destination);
    }
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        extname(file.originalname).toLowerCase()
    );
  },
});

export const imageUpload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpg|jpeg|png|gif/;
    const checkMime = filetypes.test(file.mimetype);
    const checkExt = filetypes.test(extname(file.originalname).toLowerCase());

    if (checkMime && checkExt) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});
