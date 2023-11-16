import { PetData } from "jhh-types";

import { NextFunction, Request, Response } from "express";

import { IController } from "..";

export interface IPetsController extends IController {
  getAllPets: (
    req: Request<any>,
    res: Response<any>,
    next?: NextFunction
  ) => Promise<PetData.PetDAO>;
}
