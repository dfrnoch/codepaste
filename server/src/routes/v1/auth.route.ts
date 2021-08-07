import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response): void => {
  res.status(200).json({ joe: "biden" });
});

export default router;
