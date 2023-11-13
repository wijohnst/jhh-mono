import {
  Router as ExpressRouter,
  Application as ExpressApplication,
} from "express";

import { IRoutes } from "@models/providers";
import { Logger } from "../../providers/platform/logger";

import { APIRoutes } from "../../routes/api/api-routes";

export class Routes implements IRoutes {
  private router: ExpressRouter;

  constructor(router: ExpressRouter) {
    this.router = router;
  }

  public mountAPIRoutes = (_express: ExpressApplication) => {
    return _express.use(
      "/api",
      new APIRoutes(this.router, new Logger()).init(),
    );
  };
}
