import { PetData } from "jhh-types";

import { IDTOFactory } from "@models/modules";
import { PetDTOFactory } from "./dto-factory";

import { MOCK_PET_DAO } from "../../../models/data/pets/domain_mocks";

describe("PetDTOFactory", () => {
  let sut: IDTOFactory<PetData.PetDAO, PetData.PetDTO>;

  const getSut = () => new PetDTOFactory();

  it("should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });

  describe("createDTO", () => {
    it("should return the correct PetDTO", () => {
      sut = getSut();

      expect(sut.createDTO(MOCK_PET_DAO)).toEqual({
        id: MOCK_PET_DAO.id,
        name: MOCK_PET_DAO.name,
        species: MOCK_PET_DAO.species,
        iconId: MOCK_PET_DAO.iconId,
      });
    });
  });
});
