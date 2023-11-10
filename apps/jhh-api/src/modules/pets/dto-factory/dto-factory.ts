import { PetData } from "jhh-types";

import { IDTOFactory } from "@models/modules";

export class PetDTOFactory
  implements IDTOFactory<PetData.PetDAO, PetData.PetDTO>
{
  createDTO = (dao: PetData.PetDAO): PetData.PetDTO => {
    return {
      ...dao,
    };
  };
}
