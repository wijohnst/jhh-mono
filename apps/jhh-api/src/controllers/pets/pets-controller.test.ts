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
    const mockRequest = {} as Request;
    const mockResponse = {} as Response;

    mockResponse.status = jest.fn().mockReturnValue({
      json: jest.fn().mockReturnValue([MOCK_PET_DTO]),
    });

    it("should be defined", () => {
      sut = getSut();

      expect(sut.getAllPets).toBeDefined();
    });

    it("should return the correct response", async () => {
      sut = getSut();

      expect(await sut.getAllPets(mockRequest, mockResponse)).toEqual([
        MOCK_PET_DTO,
      ]);
    });
  });
});
