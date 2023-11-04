import { IJhhController } from "src/models/controller-model";
import express from "express";
import { JhhController } from "./jhh-controller";

describe("JhhController", () => {
  let sut: IJhhController;

  const getSut = (): JhhController => new JhhController(express);

  test("should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });
});
