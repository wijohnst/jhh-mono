/**
 * @module - Pet Domain Layer Model
 */

import { PetDAO } from "@models/data/pets";

/**
 * PetDTO - Domain Transfer Object for a Pet
 */
export type PetDTO = PetDAO;

/**
 * Species - Enumerated list of possible species
 */
enum Species {
  DOG,
  CAT,
  OTHER,
}

/**
 * Pet - Domain model for a Pet
 */
export type Pet = {
  id: string;
  name: string;
  species: Species;
  iconId: string;
};

/**
 * PetSocket - Converts PetDAO or PetDTO to Pet
 */
export interface IPetSocket {
  convertToPet: (target: PetDAO | PetDTO) => Pet;
}

/**
 * PetDTOFactory - Factory for creating PetDTOs
 */
export interface IPetDTOFactory {
  createPetDTOFromPet: (pet: Pet) => PetDTO;
}

/**
 * IPetsController - Controller for /api/pets/*
 */
export interface IPetsController {
  getAllPets: () => Promise<PetDTO[]>;
}
