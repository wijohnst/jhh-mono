import mongoose from "mongoose";

import { ILogger, IMongoDB } from "@models/providers";
import { Locals } from "../locals";
import { Logger } from "../platform/logger";

export class MongoDB implements IMongoDB {
  mongoDBUri: string;
  logger: ILogger;

  constructor() {
    this.mongoDBUri = new Locals().config().MONGO_DB_URI;
    this.logger = new Logger();
  }

  public connectToDatabase = async () => {
    this.logger.log(
      `Establishing connection to database... ${this.mongoDBUri}`,
    );

    mongoose
      .connect(this.mongoDBUri)
      .then(() => this.logger.log("Connecting to mongoDB..."));

    mongoose.connection.on("error", (err) => {
      this.logger.log(err);
    });

    mongoose.connection.once("connected", () => {
      this.logger.log("Connected to database");
    });
  };
}
