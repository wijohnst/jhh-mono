import { PetDAO } from "@models/data/pets";
import { IPetSocket, Pet, PetDTO, Species } from "../../models/modules/pets";

export class PetSocket implements IPetSocket {
  constructor() {}

  /**
   * convertToPet - Converts PetDAO to Pet
   *
   * @param{PetDAO} target - PetDAO to convert
   * @returns{Pet} - Converted Pet
   */
  convertToPet = (target: PetDAO | PetDTO): Pet => {
    return {
      id: target.id,
      name: target.name,
      species: this.convertSpeciesStringToSpecies(target.species),
      iconId: target.iconId,
    };
  };

  convertSpeciesStringToSpecies = (species: string): Species => {
    switch (species.toUpperCase()) {
      case "DOG":
        return Species.DOG;
      case "CAT":
        return Species.CAT;
      default:
        return Species.OTHER;
    }
  };
}
