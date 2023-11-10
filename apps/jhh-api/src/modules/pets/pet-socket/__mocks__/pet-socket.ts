import { IPetSocket } from "@models/modules/pets";

export const PetSocket: IPetSocket = jest.createMockFromModule(
  "@models/modules/pets/pet-socket"
);
