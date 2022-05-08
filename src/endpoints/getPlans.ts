import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getPlans = async (req: Request, res: Response) =>{
    try{
        const plans = await connection("plan_info");

        res.status(200).send(plans);
    } catch (error: any){
        res.send(error.message || error.sqlMessage);
    };
};