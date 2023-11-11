import { Request, Response, Router } from "express";
import { PetData } from "jhh-types";

import { IRoutes, RouteConfig } from "@models/routes";
import { Logger } from "@providers/platform/logger";

import { PetsController } from "../../controllers/pets/pets-controller";

export class APIRoutes implements IRoutes {
  public router: Router;
  private logger: Logger;
  private apiRoutes: RouteConfig[];

  constructor(router: Router, logger: Logger) {
    this.router = router;

    this.logger = logger;
    this.apiRoutes = [...new PetsController().getRouteConfigs()];
  }

  init = () => {
    this.logger.log("Initializing API routes...");

    this.apiRoutes.forEach((route) => {
      this.router[route.method](route.path, route.handler.bind(this));
    });

    return this.router;
  };
}
