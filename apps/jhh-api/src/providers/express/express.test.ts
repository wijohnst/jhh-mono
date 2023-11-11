import { IExpress } from "@models/providers";

import { Express } from "./express";
import express from "express";
import { Logger } from "../platform/logger";
import { Locals } from "../locals";

jest.mock("express", () => {
  return jest.fn().mockImplementation(() => {
    return {
      listen: jest.fn().mockImplementation(() => {
        return {
          on: jest.fn().mockImplementation((event: string, cb: () => void) => {
            return cb();
          }),
        };
      }),
    };
  });
});

jest.mock("../platform/logger", () => ({
  Logger: jest.fn().mockImplementation(() => {
    return { log: jest.fn() };
  }),
}));

jest.mock("../locals/Locals", () => ({
  Locals: jest.fn().mockImplementation(() => {
    return { config: jest.fn(() => ({ PORT: 2621 })) };
  }),
}));

describe("Express app provider", () => {
  let sut: IExpress;

  const getSut = () => new Express(express(), new Logger(), new Locals());

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
      sut = new Express(_express, logger, new Locals());

      sut.init();

      expect(_express.listen).toHaveBeenCalled();
    });
  });
});
