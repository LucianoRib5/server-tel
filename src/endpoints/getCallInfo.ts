import { Request, Response } from "express";
import { connection } from "../data/connection";

export const getCallInfo = async( req: Request, res: Response): Promise<void> =>{
    try{
        const source = req.params.source;
        const destiny = req.params.destiny;

        const presets = await connection("preset_list")
        .where("source", "like", `%${source}%`)
        .where("destiny", "like", `%${destiny}%`);

        res.status(200).send(presets);
    } catch(error){
        if(error instanceof Error){
            res.send(error.message)
        }else{
            res.send(error)
        };
    };
};