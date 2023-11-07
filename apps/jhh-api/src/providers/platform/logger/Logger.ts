import { ILogger } from "@models/providers";

export default class Logger implements ILogger {
  public log = (message: string, debug: boolean = false) => {
    if (process.env.NODE_ENV !== "test" || debug) {
      console.log(message);
    }
  };
}
