import { connection } from "../data/connection";

export const insertResults = async (
    source: string | undefined,
    destiny: string | undefined,
    valuePerMinute: number | undefined,
    time: number | undefined,
    planName: string | undefined,
    resWithFaleMais: number | undefined,
    resDontFaleMais: number | undefined
): Promise<void> =>{
    
    await connection("results")
    .insert({
        "source": source,
        "destiny": destiny,
        "value_per_minute": valuePerMinute,
        "time": time,
        "plan_name": planName,
        "res_with_faleMais": resWithFaleMais,
        "res_dont_falemais": resDontFaleMais
    });
};