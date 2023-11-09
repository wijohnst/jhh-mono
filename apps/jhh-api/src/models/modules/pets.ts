/**
 * @module - Pet Domain Layer Model
 */

import { Pet } from "jhh-types";

import { PetDAO } from "@models/data/pets";

/**
 * PetDTO - Domain Transfer Object for a Pet
 */
export type PetDTO = Pet;

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
