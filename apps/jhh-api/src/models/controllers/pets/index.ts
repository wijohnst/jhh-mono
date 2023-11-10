import { PetData } from "jhh-types";

import { IController } from "..";

export interface IPetsController extends IController {
  getAllPets: () => Promise<PetData.PetDTO[]>;
}
