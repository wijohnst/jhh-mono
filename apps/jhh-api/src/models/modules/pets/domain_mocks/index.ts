import { PetDAOFactory } from "../../../../modules/pets";
import { PetDocumentFactory } from "../../../../data/pets/pet-document-factory";

import { PetData } from "jhh-types";

export const MOCK_PET_DTO: PetData.PetDTO = {
  id: "MOCK_ID",
  name: "MOCK_PET_NAME",
  species: "MOCK_SPECIES",
  iconId: "MOCK_ICON_ID",
};

export const MOCK_PET_DAO: PetData.PetDAO = new PetDAOFactory().createDAO(
  MOCK_PET_DTO
);

export const MOCK_PET_DOCUMENT: PetData.PetDocument =
  new PetDocumentFactory().createDocument(MOCK_PET_DAO);
