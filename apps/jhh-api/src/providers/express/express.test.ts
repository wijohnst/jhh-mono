import { IExpress } from "@models/providers";

import { Express } from "./express";
import express from "express";
import { Logger } from "../platform/logger";
import { Locals } from "../locals";
import { Routes } from "../routes";

// const mockExpressApplication = {
//   listen: jest.fn().mockImplementation(() => ({
//     on: jest.fn().mockImplementation((event: string, cb: () => void) => {
//       return cb();
//     }),
//   })),
// };

// jest.mock("express", () => {
//   return jest.fn().mockImplementation(() => ({
//     Router: jest.fn(),
//     listen: jest.fn().mockImplementation(() => {
//       return {
//         on: jest.fn().mockImplementation((event: string, cb: () => void) => {
//           return cb();
//         }),
//       };
//     }),
//   }));
// });

jest.mock("../platform/logger", () => ({
  Logger: jest.fn().mockImplementation(() => {
    return { log: jest.fn() };
  }),
}));

jest.mock("../locals", () => ({
  Locals: jest.fn().mockImplementation(() => {
    return { config: jest.fn(() => ({ PORT: 2621 })), init: jest.fn() };
  }),
}));

jest.mock("../routes/routes", () => ({
  Routes: jest.fn().mockImplementation(() => {
    return { mountAPIRoutes: jest.fn() };
  }),
}));

describe("Express app provider", () => {
  let sut: IExpress;

  const getSut = () =>
    new Express(
      express(),
      new Logger(),
      new Locals(),
      new Routes(express.Router()),
    );

  it("✅ should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });

  describe("init", () => {
    it("✅ should be defined", () => {
      sut = getSut();

      expect(sut.init).toBeDefined();
    });

    it("✅ server should listen", () => {
      let _express = express();
      let logger = new Logger();

      const listenSpy = jest.spyOn(_express, "listen");

      sut = new Express(
        _express,
        logger,
        new Locals(),
        new Routes(express.Router()),
      );

      sut.init();

      expect(listenSpy).toHaveBeenCalled();
    });
  });

  describe("mountConfig", () => {
    it("✅ should call `locals.init`", () => {
      let _express = express();
      let locals = new Locals();
      let logger = new Logger();
      let routes = new Routes(express.Router());

      sut = new Express(_express, logger, locals, routes);

      sut.init();

      expect(locals.init).toHaveBeenCalled();
    });
  });

  describe("mountRoutes", () => {
    it("✅ should mount API routes", () => {
      let _express = express();
      let locals = new Locals();
      let logger = new Logger();
      let routes = new Routes(express.Router());

      sut = new Express(_express, logger, locals, routes);

      sut.init();

      expect(routes.mountAPIRoutes).toHaveBeenCalled();
    });
  });
});
