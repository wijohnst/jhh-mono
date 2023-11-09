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
