import { MOCK_PET_DAO } from "../../models/data/__mocks__/pets";
import { IPetDAOFactory, PetDAO } from "@models/data/pets";

export class PetDAOFactory implements IPetDAOFactory {
  constructor() {}

  createPetDAO = (petDTO: PetDAO): PetDAO => {
    return {
      ...petDTO,
    };
  };
}
