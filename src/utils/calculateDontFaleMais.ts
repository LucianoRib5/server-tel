import { ValueMinute } from "../types";

export const calculateDontFaleMais = (
        time: number,
        valuePerMinute: ValueMinute[]
    ): number =>{

    let result: number = 0;
    result =  time * valuePerMinute[0].value_per_minute;

    return result;
};