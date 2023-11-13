import { RouteConfig } from "@models/routes";

export interface IController {
  getRouteConfigs: () => RouteConfig[];
}
