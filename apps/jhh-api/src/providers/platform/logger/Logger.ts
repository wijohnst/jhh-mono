import { ILogger } from "src/models/providers";

export default class Logger implements ILogger {
  public log = (message: string) => {
    console.log(message);
  };
}
