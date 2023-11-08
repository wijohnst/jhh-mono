import Express from "express";

export interface IController {}
export interface IJhhController extends IController {
  express: () => Express.Application;
  createApplication: () => Express.Application;
}
