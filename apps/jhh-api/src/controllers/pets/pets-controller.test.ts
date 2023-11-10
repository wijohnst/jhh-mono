import { IPetsController } from "@models/controllers/pets";

import { PetsController } from "./pets-controller";

import { MOCK_PET_DTO } from "../../models/modules/pets/__mocks__";
import { Request, Response } from "express";

describe("Pets Controller", () => {
  let sut: IPetsController;

  const getSut = () => new PetsController();

  it("✅ should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });

  describe("getAllPets", () => {
    it("should be defined", () => {
      sut = getSut();

      expect(sut.getAllPets).toBeDefined();
    });

    it("should return the correct response", async () => {
      sut = getSut();

      expect(
        await sut.getAllPets(
          { status: (_number: number) => {} } as unknown as Request,
          {} as Response
        )
      ).toEqual([MOCK_PET_DTO]);
    });
  });
});
