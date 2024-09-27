import express, { Request, Response,NextFunction } from "express";
const router = express.Router();

router.get("/test",async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200).json({mess: "OK!"}).end();
})

export default router;