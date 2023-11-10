import { Request, Response } from "express";

import { PetData } from "jhh-types";

import { IPetsController } from "@models/controllers/pets";

import { MOCK_PET_DTO } from "../../models/modules/pets/__mocks__";

export class PetsController implements IPetsController {
  constructor() {}

  getAllPets = async (req: Request, res: Response) => {
    return res.status(200).json([MOCK_PET_DTO]);
  };
}
