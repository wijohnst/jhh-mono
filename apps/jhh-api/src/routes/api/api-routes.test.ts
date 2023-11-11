import { Router } from "express";

import { IRoutes } from "@models/routes";
import { Logger } from "@providers/platform/logger";

import { APIRoutes } from "./api-routes";

describe("API Routes", () => {
  let sut: IRoutes;

  const getSut = () => new APIRoutes(Router(), new Logger());

  it("✅ should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });
});
