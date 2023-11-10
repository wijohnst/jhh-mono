/**
 * @module - Pet Domain Layer Model
 */

import { Pet, PetData } from "jhh-types";

/**
 * PetSocket - Converts PetDAO or PetDTO to Pet
 */
export interface IPetSocket {
  convertToPet: (target: PetData.PetDAO | PetData.PetDTO) => Pet;
}

/**
 * PetDTOFactory - Factory for creating PetDTOs
 */
export interface IPetDTOFactory {
  createPetDTOFromPet: (pet: Pet) => PetData.PetDTO;
}
