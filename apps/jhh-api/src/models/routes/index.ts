import { Request, Router, NextFunction } from "express";

type Method = "get" | "post" | "put" | "delete";

export type RouteConfig = {
  method: Method;
  path: string;
  handler: <T>(req: Request, res: Response, next?: NextFunction) => Promise<T>;
};

export interface IRoutes {
  init: () => Router;
}
