jest.mock("../platform/logger/Logger", () => {
  return jest.fn().mockImplementation(() => {
    return { log: jest.fn() };
  });
});

jest.mock("express", () => {
  return jest.fn().mockImplementation(() => {
    return {
      listen: jest.fn().mockImplementation(() => {
        return {
          on: jest
            .fn()
            .mockImplementation((event: string, cb: (error: Error) => void) => {
              return cb(new Error("test error"));
            }),
        };
      }),
    };
  });
});

import { IJhhApp } from "src/models/providers";
import { JhhApp } from "./jhh-app";

describe("JhhApp", () => {
  let sut: IJhhApp;

  const getSut = () => {
    return new JhhApp();
  };

  test("✅ should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });

  describe("initServer", () => {
    test("✅ should be defined", () => {
      sut = getSut();

      expect(sut.initServer).toBeDefined();
    });

    test("✅ should initialize the server when called", () => {
      sut = getSut();

      sut.initServer();

      expect(sut.express.listen).toHaveBeenCalled();
    });
  });
});
