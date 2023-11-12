import { IExpress } from "@models/providers";

import { Express } from "./express";
import express from "express";
import { Logger } from "../platform/logger";
import { Locals } from "../locals";
import { Routes } from "../routes";

const mockExpressApplication = {
  listen: jest.fn().mockImplementation(() => ({
    on: jest.fn().mockImplementation((event: string, cb: () => void) => {
      return cb();
    }),
  })),
};

const mockRouter = jest.fn();

// jest.mock("express", () => {
//   return jest.fn().mockImplementation(() => ({
//     listen: jest.fn().mockImplementation(() => {
//       return {
//         on: jest.fn().mockImplementation((event: string, cb: () => void) => {
//           return cb();
//         }),
//       };
//     }),
//   }));
// });

jest.mock("express", () => {
  return {
    Router: jest.fn().mockImplementation(() => mockRouter),
  };
});

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
      new Routes(express.Router())
    );

  it("✅ should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });

  it("✅ should instantiate an express.Application", () => {
    sut = getSut();

    expect(express).toHaveBeenCalled();
  });

  describe("init", () => {
    it("✅ should be defined", () => {
      sut = getSut();

      expect(sut.init).toBeDefined();
    });

    it("✅ server should listen", () => {
      let _express = express();
      let logger = new Logger();
      sut = new Express(
        _express,
        logger,
        new Locals(),
        new Routes(express.Router())
      );

      sut.init();

      expect(_express.listen).toHaveBeenCalled();
    });
  });

  describe("mountConfig", () => {
    it("✅ should call `locals.init`", () => {
      let _express = express();
      let locals = new Locals();

      sut = new Express(
        _express,
        new Logger(),
        locals,
        new Routes(express.Router())
      );

      sut.init();

      expect(locals.init).toHaveBeenCalled();
    });
  });

  describe("mountRoutes", () => {});
});
