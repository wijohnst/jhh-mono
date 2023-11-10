import { PetData } from "jhh-types";

import { IDAOFactory } from "@models/data";

export class PetDAOFactory
  implements IDAOFactory<PetData.PetDTO, PetData.PetDAO>
{
  constructor() {}

  createDAO = (petDTO: PetData.PetDAO): PetData.DAO => {
    return {
      ...petDTO,
    };
  };
}
