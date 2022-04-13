import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from "cors";
import ormconfig from "./config/ormconfig";
import index from "./routes/index";
dotenv.config();

async function main() {
  try {
    const connection = await createConnection(ormconfig);
    const app = express();

    // morgan to log methods
    // app.use(morgan("dev"));

    // body-parser
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // you can write cors with 2 ways:

    // 1. npm install cors
    app.use(cors());

    app.use("/api", index);

    app.use(function (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) {
      res.status(404).json({ status: 404, message: "Page not found" });
    });

    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Server started on port ${process.env.SERVER_PORT}!`);
    });
  } catch (e) {
    console.log(e);
  }
}
main();
