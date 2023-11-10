/**
 * Species - Enumerated list of possible species
 */
export enum Species {
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

export module PetData {
  /**
   * PetDTO - Domain Transfer Object for a Pet
   */
  export type PetDTO = Pet;

  /**
   * PetDAO - Pet Data Access Object
   */
  export type PetDAO = Pet;
}
