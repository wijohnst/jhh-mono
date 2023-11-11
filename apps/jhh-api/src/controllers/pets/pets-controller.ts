import { Request, Response } from "express";

import { IPetsController } from "@models/controllers/pets";

import { MOCK_PET_DTO } from "../../models/modules/pets/__mocks__";

import { MethodsEnum } from "../../models/routes";

export class PetsController implements IPetsController {
  constructor() {}

  getAllPets = (req: Request, res: Response) => {
    return res.status(200).json([MOCK_PET_DTO]);
  };

  getRouteConfigs = () => {
    return [
      {
        method: MethodsEnum.GET,
        path: "/pets",
        handler: this.getAllPets,
      },
    ];
  };
}
