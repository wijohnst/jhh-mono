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
    try {
      await mongoose.connect(this.mongoDBUri.toString()).then(() => {
        this.logger.log("Connected to MongoDB");
      });
    } catch (error: unknown) {
      console.error(error);
    }
  };
}
