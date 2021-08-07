import express, { Router } from "express";
import authRoute from "./auth.route";
import postRoute from "./post.route";
import { Routes } from "src/interfaces/router.interface";

const router: Router = express.Router();

const defaultRoutes: Routes[] = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/post",
    route: postRoute,
  },
];

defaultRoutes.forEach((route: any) => {
  router.use(route.path, route.route);
});

export default router;
