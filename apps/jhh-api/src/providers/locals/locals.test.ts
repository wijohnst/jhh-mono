import { ILocals, configDefaults } from "../../models/providers";

import { Locals } from "./locals";

describe("Locals", () => {
  let sut: ILocals;

  const getSut = () => {
    return new Locals();
  };

  beforeEach(() => {
    jest.resetModules();
  });

  test("✅ should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });

  describe("config", () => {
    const defaultKeyValues = Object.entries(configDefaults);

    test("✅ should return the port from the .env file", () => {
      sut = getSut();
      const config = sut.config();

      expect(config.PORT).toEqual("3030");
    });

    test.each(defaultKeyValues)(
      "✅ should return the default value if the .env file is missing the key",
      (key, defaultValue) => {
        process.env[key] = "";
        sut = getSut();
        const config = sut.config();

        const target = config[key as keyof typeof config];

        expect(target).toEqual(defaultValue);
      },
    );
  });
});
