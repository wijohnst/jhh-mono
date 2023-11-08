import { PetDTO } from "@models/domain/pets";

export interface IController {}

export interface IPetsController extends IController {
  getAllPets: () => Promise<PetDTO[]>;
}
