import express from "express";
import { IJhhApp, ILocals } from "@models/providers";

import { Logger } from "../platform/logger";
import { Locals } from "../locals";
export class JhhApp implements IJhhApp {
  express: express.Application;
  logger: Logger;
  locals: ILocals;
  PORT: string;

  constructor() {
    this.express = express();
    this.logger = new Logger();
    this.locals = new Locals();
    this.PORT = this.locals.config().PORT;
  }

  public initServer = () => {
    this.express
      .listen(this.PORT, () => {
        return this.logSuccess();
      })
      .on("error", (err: Error) => {
        return this.logError(err);
      });
  };

  private logSuccess = () => {
    this.logger.log(`Server running on port ${this.PORT}`);
  };

  private logError = (err: Error) => {
    this.logger.log(err.message);
  };
}
