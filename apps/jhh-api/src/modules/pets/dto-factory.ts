import { PetDAO } from "@models/data/pets";
import { IDTOFactory } from "@models/modules";
import { PetDTO } from "@models/modules/pets";

export class DTOFactory implements IDTOFactory<PetDAO, PetDTO> {
  createDTO = (dao: PetDAO): PetDTO => {
    return {
      ...dao,
    };
  };
}
