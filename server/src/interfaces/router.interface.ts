import { Router, PathParams } from "express-serve-static-core";

export interface Routes {
  path?: PathParams;
  route: Router;
}
