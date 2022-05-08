import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getAllAreaCodes = async (req: Request, res: Response): Promise<void> =>{
    try {
        const result = await connection("area_code_list");

        res.status(200).send(result);
    } catch (error: any) {
        res.send(error.message || error.sqlMessage);
    };
};