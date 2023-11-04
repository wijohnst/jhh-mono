import Express from "express";

export interface IJhhController {
  express: () => Express.Application;
  createApplication: () => Express.Application;
}
