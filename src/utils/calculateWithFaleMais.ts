import { ValueMinute } from "../types";

export const calculateWithFaleMais = (
        plan: string,
        time: number,
        valuePerMinute: ValueMinute[],
    ): number =>{

    let result: number = 0;

    switch (plan) {
        case 'FaleMais 30':
            if(time > 30){
                result =  (time - 30) * (valuePerMinute[0].value_per_minute + (10 / 100 * valuePerMinute[0].value_per_minute));
            }
            break;
        case 'FaleMais 60':
            if(time > 60){
                result = (time - 60) * (valuePerMinute[0].value_per_minute + (10 / 100 * valuePerMinute[0].value_per_minute));
            }
            break;
        case 'FaleMais 120':
            if(time > 120){
                result = (time - 120) * (valuePerMinute[0].value_per_minute + (10 / 100 * valuePerMinute[0].value_per_minute));
            }
            break;
        default:
            result = 0;
    };

    return result;
};