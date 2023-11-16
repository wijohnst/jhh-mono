import { Request, Response } from "express";

import { IPetsController } from "../../models/controllers/pets";

import { MethodsEnum } from "../../models/routes";

import { PetModel } from "../../models/data/pets";

export class PetsController implements IPetsController {
  constructor() {}

  getAllPets = async (req: Request, res: Response) => {
    try {
      const pets = await PetModel.find();
      res.status(200).json({
        status: 200,
        message: `Successfully retrieved ${pets.length} pets`,
        data: pets,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Internal server error",
        data: error,
      });
    }
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
