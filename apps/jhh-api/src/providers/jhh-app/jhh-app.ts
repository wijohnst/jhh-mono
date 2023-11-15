import {
  Application as ExpressApplication,
  Router as ExpressRouter,
} from "express";
import { IExpress, IJhhApp, ILocals } from "@models/providers";

import { Logger } from "../platform/logger";
import { Locals } from "../locals";
import { Express } from "../express";
import { Routes } from "../routes";
export class JhhApp implements IJhhApp {
  express: ExpressApplication;
  expressProvider: IExpress;

  constructor(_express: ExpressApplication, _router: ExpressRouter) {
    this.express = _express;
    this.expressProvider = new Express(
      this.express,
      new Logger(),
      new Locals(),
      new Routes(_router)
    );
  }

  public initServer = () => {
    this.expressProvider.init();
  };
}
