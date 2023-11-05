import { config as dotenvConfig } from "dotenv";
import * as path from "path";

import { ILocals, configDefaults } from "../../models/providers";

export class Locals implements ILocals {
  public config = () => {
    dotenvConfig({ path: path.join(__dirname, "../../../.env") });
    const PORT = process.env.PORT || configDefaults.PORT;

    return {
      PORT,
    };
  };
}
