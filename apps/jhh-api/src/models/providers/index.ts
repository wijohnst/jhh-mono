import express from "express";

export interface IJhhApp {
  express: express.Application;
  logger: ILogger;
  initServer: () => any;
}

export interface ILogger {
  log: (message: string) => void;
}

type ConfigProperties = {
  PORT: string;
};

export const configDefaults: ConfigProperties = {
  PORT: "2621",
};
export interface ILocals {
  config: () => ConfigProperties;
}
