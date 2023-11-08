import { PetDAOFactory } from "./dao-factory";
import { MOCK_PET_DTO } from "../../models/modules/__mocks__/pets";
import { IDAOFactory } from "@models/data";
import { PetDTO } from "@models/modules/pets";
import { PetDAO } from "@models/data/pets";

describe("PetDAOFactory", () => {
  let sut: IDAOFactory<PetDTO, PetDAO>;

  const getSut = () => {
    return new PetDAOFactory();
  };

  it("should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });

  describe("createPetDAO", () => {
    it("should return correct PetDAO", () => {
      sut = getSut();

      expect(sut.createDAO(MOCK_PET_DTO)).toEqual({
        id: MOCK_PET_DTO.id,
        name: MOCK_PET_DTO.name,
        species: MOCK_PET_DTO.species,
        iconId: MOCK_PET_DTO.iconId,
      });
    });
  });
});
