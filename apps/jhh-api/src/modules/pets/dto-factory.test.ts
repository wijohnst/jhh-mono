import { PetDAO } from "@models/data/pets";
import { IDTOFactory } from "@models/modules";
import { PetDTO } from "@models/modules/pets";

import { DTOFactory } from "./dto-factory";
import { MOCK_PET_DAO } from "../../models/data/__mocks__/pets";

describe("PetDTOFactory", () => {
  let sut: IDTOFactory<PetDAO, PetDTO>;

  const getSut = () => new DTOFactory();

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
