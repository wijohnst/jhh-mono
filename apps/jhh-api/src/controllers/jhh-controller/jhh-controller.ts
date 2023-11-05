import Express from "express";
import { IJhhController } from "@models/controllers";

export class JhhController implements IJhhController {
  constructor(express: () => Express.Application) {
    this.express = express;
  }

  express: () => Express.Application;

  public createApplication(): Express.Application {
    return this.express();
  }
}
