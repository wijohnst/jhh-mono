import { ILogger } from "@models/providers";
import { LoggerOptions } from "@models/providers/platform/logger";

export default class Logger implements ILogger {
  public log = (message: string, { isDebug = false }: LoggerOptions = {}) => {
    if (process.env.NODE_ENV !== "test" || isDebug) {
      console.log(message);
    }
  };
}
