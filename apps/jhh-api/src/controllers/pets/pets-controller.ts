import { Request, Response } from "express";

import { IPetsController } from "../../models/controllers/pets";

import { MOCK_PET_DAO } from "../../models/modules/pets/domain_mocks";

import { MethodsEnum } from "../../models/routes";

export class PetsController implements IPetsController {
  constructor() {}

  getAllPets = async (req: Request, res: Response) => {
    return res.status(200).json([MOCK_PET_DAO]);
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
