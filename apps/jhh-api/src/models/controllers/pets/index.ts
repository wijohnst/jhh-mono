import { PetData } from "jhh-types";

import { IController } from "..";
import { NextFunction, Request, Response } from "express";

export interface IPetsController extends IController {
  getAllPets: (
    req: Request<{}>,
    res: Response,
    next?: NextFunction
  ) => Promise<Response<PetData.PetDTO[]>>;
}
