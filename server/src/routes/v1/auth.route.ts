import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response): void => {
  res.status(200).json({ joe: "biden" });
});

export default router;
