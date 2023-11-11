import { Router } from "express";

import { IRoutes } from "@models/routes";
import { Logger } from "@providers/platform/logger";

export class APIRoutes implements IRoutes {
  public router: Router;
  private logger: Logger;

  constructor(router: Router, logger: Logger) {
    this.router = router;

    this.logger = logger;
  }

  init = () => {
    return this.router;
  };
}
