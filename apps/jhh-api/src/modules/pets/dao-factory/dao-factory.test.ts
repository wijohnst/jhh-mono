import { PetData } from "jhh-types";
import { PetDAOFactory } from "./dao-factory";
import { MOCK_PET_DTO } from "../../../models/modules/pets/domain_mocks";

import { IDAOFactory } from "@models/data/pets";

describe("PetDAOFactory", () => {
  let sut: IDAOFactory<PetData.PetDTO, PetData.PetDAO>;

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
