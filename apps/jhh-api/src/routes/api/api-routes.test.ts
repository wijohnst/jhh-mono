import { Router } from "express";

import { IRoutes } from "@models/routes";
import { Logger } from "../../providers/platform/logger";
import { PetsController } from "../../controllers/pets/pets-controller";

import { APIRoutes } from "./api-routes";

describe("API Routes", () => {
  let sut: IRoutes;

  const getSut = () => new APIRoutes(Router(), new Logger());

  it("✅ should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });

  describe("init", () => {
    it("✅ should return a Router", () => {
      sut = getSut();

      const router = sut.init();

      expect(router).toBeDefined();
    });

    it("✅ router should include all `/pets` endpoints ", () => {
      sut = getSut();

      const router = sut.init();

      const paths = router.stack.map((layer) => layer.route.path);
      const petRoutes = new PetsController()
        .getRouteConfigs()
        .map((route) => route.path);

      paths.forEach((path) => {
        expect(petRoutes.includes(path)).toBe(true);
      });
    });
  });
});
