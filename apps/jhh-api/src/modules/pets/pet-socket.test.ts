import { IPetSocket } from "@models/modules/pets";

import { PetSocket } from "./pet-socket";
import { MOCK_PET_DTO } from "../../models/modules/__mocks__/pets";

describe("PetSocket", () => {
  let sut: IPetSocket;

  const getSut = () => {
    return new PetSocket();
  };

  describe("convertToPet", () => {
    it("should be defined", () => {
      sut = getSut();

      expect(sut.convertToPet).toBeDefined();
    });

    it("should return the correct Pet", () => {
      sut = getSut();

      expect(sut.convertToPet(MOCK_PET_DTO)).toEqual({
        id: "MOCK_ID",
        name: "MOCK_PET_NAME",
        species: 2,
        iconId: "MOCK_ICON_ID",
      });
    });
  });
});
