import { PetDAO } from "@models/data/pets";
import { IPetSocket, PetDTO } from "../../models/modules/pets";
import { Pet, Species } from "jhh-types";

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
        return 0;
      case "CAT":
        return 1;
      default:
        return 2;
    }
  };
}
