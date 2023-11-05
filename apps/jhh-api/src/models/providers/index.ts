import express from "express";

export interface IJhhApp {
  express: express.Application;
  logger: ILogger;
  initServer: () => any;
}

export interface ILogger {
  log: (message: string) => void;
}
