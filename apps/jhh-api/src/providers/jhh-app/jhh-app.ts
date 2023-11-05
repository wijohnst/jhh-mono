import express from "express";
import { IJhhApp } from "src/models/providers";

import Logger from "../platform/logger/Logger";

export class JhhApp implements IJhhApp {
  express: express.Application;
  public logger: Logger;

  constructor() {
    this.express = express();
    this.logger = new Logger();
  }

  public initServer = () => {
    this.express
      .listen("2621", () => {
        return this.logSuccess();
      })
      .on("error", (err: Error) => {
        return this.logger.log(err.message);
      });
  };

  private logSuccess = () => {
    this.logger.log("Server is running on port 2621");
  };
}
