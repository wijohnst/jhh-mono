import { IDAOFactory } from "@models/data";
import { MOCK_PET_DAO } from "../../models/data/__mocks__/pets";
import { PetDAO } from "@models/data/pets";
import { PetDTO } from "@models/modules/pets";

export class PetDAOFactory implements IDAOFactory<PetDTO, PetDAO> {
  constructor() {}

  createDAO = (petDTO: PetDAO): PetDAO => {
    return {
      ...petDTO,
    };
  };
}
