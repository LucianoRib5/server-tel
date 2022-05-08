import { Request, Response } from "express";
import { connection } from "../data/connection";

export const deleteResult = async (req: Request, res: Response): Promise<void> =>{
    try {
        await connection("results")
        .del(); 

        res.status(200).send("Resultado deletado!");
    } catch (error) {
        if(error instanceof Error){
            res.send(error.message);
        }else{
            res.send(error);
        };
    };
};