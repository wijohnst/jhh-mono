import { PetData } from "jhh-types";

import { IDocumentFactory, PetDocument } from "@models/data/pets";

import { PetDocumentFactory } from "./pet-document-factory";
import { MOCK_PET_DAO } from "../../models/data/pets/__mocks__";

import mongoose from "mongoose";

describe("PetDocumentFactory", () => {
  let sut: IDocumentFactory<PetData.PetDAO, PetDocument>;

  const getSut = () => new PetDocumentFactory();

  it("✅ should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });

  describe("createDocument", () => {
    it("✅ should return a PetDocument", () => {
      sut = getSut();

      const document = sut.createDocument(MOCK_PET_DAO);

      expect(document).toBeDefined();
    });
  });
});
