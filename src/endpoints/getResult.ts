import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getResult= async (req: Request, res: Response): Promise<void> =>{
    try {
        const result = await connection("results");

        res.status(200).send(result[0]);
    } catch (error: any) {
        res.send(error.message || error.sqlMessage);
    };
};