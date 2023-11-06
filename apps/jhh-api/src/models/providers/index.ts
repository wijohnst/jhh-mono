import express from "express";

export interface IJhhApp {
  express: express.Application;
  logger: ILogger;
  initServer: () => any;
}

export interface ILogger {
  log: (message: string, debug?: boolean) => void;
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
}

export interface IMongoDB {
  connectToDatabase: () => Promise<void>;
}
