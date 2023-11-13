import { Router, Request, Response } from "express";

type Method = "get" | "post" | "put" | "patch" | "delete";

export enum MethodsEnum {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete",
}

export type RouteConfig = {
  method: MethodsEnum;
  path: string;
  handler: (req: Request<any>, res: Response<any>, next?: any) => any;
};

export interface IRoutes {
  init: () => Router;
}
