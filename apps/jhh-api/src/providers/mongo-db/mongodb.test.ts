import { IMongoDB } from "@models/providers";
import { MongoDB } from "./mongodb";
import mongoose from "mongoose";
import { Logger } from "../platform/logger";

describe("MongoDB Provider", () => {
  let sut: IMongoDB;

  const getSut = (): IMongoDB => {
    return new MongoDB();
  };

  test("should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });

  describe("connectToDatabase", () => {
    test("should connect to the database", () => {
      jest
        .spyOn(mongoose, "connect")
        .mockResolvedValue(new mongoose.Mongoose());
      sut = getSut();

      sut.connectToDatabase();
      expect(mongoose.connect).toHaveBeenCalled();
    });
  });
});
