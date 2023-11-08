import { PetDTO } from "@models/modules/pets";

export interface IController {}

export interface IPetsController extends IController {
  getAllPets: () => Promise<PetDTO[]>;
}
