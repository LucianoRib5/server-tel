import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getPlans = async (req: Request, res: Response) =>{
    try{
        const plans = await connection("plan_info");

        res.status(200).send(plans);
    } catch (error){
        if(error instanceof Error){
            res.send(error.message);
        }else{
            res.send(error);
        };
    };
};