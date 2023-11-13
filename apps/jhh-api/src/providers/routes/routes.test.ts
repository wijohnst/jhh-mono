import express from "express";
import { IRoutes } from "@models/providers";
import { Routes } from "./routes";

describe("Routes", () => {
  let sut: IRoutes;

  const getSut = () => new Routes(express.Router());

  it("✅ should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });
});
