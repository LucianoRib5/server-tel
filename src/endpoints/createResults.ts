import { Request, Response } from "express";
import { connection } from "../data/connection";
import { insertResults } from "../queries/insertResults";
import { calculateWithFaleMais } from "../utils/calculateWithFaleMais";
import { calculateDontFaleMais } from "../utils/calculateDontFaleMais";
import { ValueMinute } from "../types";
import { errors } from "../errors";

export const createResults = async (req: Request, res: Response): Promise<void> =>{
    try {
        const source: string = req.body.source;
        const destiny: string = req.body.destiny;
        const time: number = req.body.time;
        const plan: string = req.body.plan;

        if(!source || !destiny || !time || !plan){
            throw new Error(errors.UNPROCESSABLE_ENTITY.message);
        };

        const valuePerMinute: ValueMinute[] = await connection("preset_list")
        .select("value_per_minute")
        .where("source", "like", `%${source}%`)
        .where("destiny", "like", `%${destiny}%`);

        const resWithFaleMais: number = calculateWithFaleMais(plan, time, valuePerMinute);
        const resDontFaleMais: number = calculateDontFaleMais(time, valuePerMinute);
        
        await insertResults(
            source,
            destiny,
            valuePerMinute[0].value_per_minute,
            time,
            plan,
            resWithFaleMais,
            resDontFaleMais
        );

        res.status(201).send("Resultado criado!")

    } catch (error: any) {
        switch (error.message) {
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);                
                break;
        };
    };
};