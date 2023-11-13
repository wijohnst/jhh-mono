import express from "express";
import { LoggerOptions } from "./platform/logger";

export interface IJhhApp {
  express: IExpress;
  initServer: () => any;
}

export interface ILogger {
  log: (message: string, options?: LoggerOptions) => void;
}

type ConfigProperties = {
  PORT: string;
  MONGO_DB_URI: string;
};

export const configDefaults: ConfigProperties = {
  PORT: "2621",
  MONGO_DB_URI: "",
};
export interface ILocals {
  config: () => ConfigProperties;
  init: (_express: express.Application) => void;
}

export interface IMongoDB {
  connectToDatabase: () => void;
}

/**
 * @description Provides `express.Application` and privately mounts environment configuration, middlewares, and routes
 */
export interface IExpress {
  /** Start the Express server */
  init: () => void;
}

export interface IRoutes {
  mountAPIRoutes: (express: express.Application) => void;
}
