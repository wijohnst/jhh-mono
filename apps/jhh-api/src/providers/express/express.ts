import { Application as ExpressApplication } from "express";

import { IExpress } from "@models/providers";
import { Locals } from "../locals";
import { Logger } from "../platform/logger";
import { Routes } from "../routes/routes";

export class Express implements IExpress {
  public express: ExpressApplication;
  private logger: Logger;
  private locals: Locals;
  private routes: Routes;

  constructor(
    _express: ExpressApplication,
    logger: Logger,
    locals: Locals,
    routes: Routes,
  ) {
    this.express = _express;

    this.locals = locals;
    this.logger = logger;
    this.routes = routes;
  }

  private mountConfig = () => {
    this.locals.init(this.express);
  };

  private mountRoutes = () => {
    this.routes.mountAPIRoutes(this.express);
  };

  init() {
    const port = this.locals.config().PORT;

    this.logger.log("Mounting local configuration...");
    this.mountConfig();

    this.logger.log("Mounting routes...");
    this.mountRoutes();

    this.logger.log("Starting server...");
    this.express
      .listen(port, () => {
        return this.logger.log(`Server running on port ${port}`);
      })
      .on("error", (err) => {
        return this.logger.log(`Error starting server: ${err}`);
      });
  }
}
