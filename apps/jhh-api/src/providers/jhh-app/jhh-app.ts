import express from "express";
import { IExpress, IJhhApp, ILocals } from "@models/providers";

import { Logger } from "../platform/logger";
import { Locals } from "../locals";
import { Express } from "../express";
import { Routes } from "../routes";
export class JhhApp implements IJhhApp {
  express: IExpress;

  constructor(_express: IExpress) {
    this.express = _express;
  }

  public initServer = () => {
    this.express.init();
  };
}
