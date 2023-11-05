import Express from "express";
import { IJhhController } from "src/models/controllers/controller-model";

export class JhhController implements IJhhController {
  constructor(express: () => Express.Application) {
    this.express = express;
  }

  express: () => Express.Application;

  public createApplication(): Express.Application {
    return this.express();
  }
}
