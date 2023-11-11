import express from "express";

import { IExpress } from "@models/providers";
import { Locals } from "../locals";
import { Logger } from "../platform/logger";

export class Express implements IExpress {
  public express: express.Application;
  private logger: Logger;
  private locals: Locals;

  constructor(express: express.Application, logger: Logger, locals: Locals) {
    this.express = express;

    this.locals = locals;
    this.logger = logger;
  }

  init() {
    const port = this.locals.config().PORT;

    this.express
      .listen(port, () => {
        return this.logger.log(`Server running on port ${port}`, {
          isDebug: true,
        });
      })
      .on("error", (err) => {
        return this.logger.log(`Error starting server: ${err}`);
      });
  }
}
