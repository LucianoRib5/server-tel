import { connection } from "./connection";
import presetPrices from "./defaultCallPricesPerMinute.json";
import plans from "./plans.json";
import areaCode from "./areaCode.json";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

         CREATE TABLE IF NOT EXISTS area_code_list(
            id INT PRIMARY KEY AUTO_INCREMENT,
            area_code VARCHAR(255) NOT NULL UNIQUE
         );

         CREATE TABLE IF NOT EXISTS preset_list (
            id INT PRIMARY KEY AUTO_INCREMENT,
            source VARCHAR(255) NOT NULL,
            destiny VARCHAR(255) NOT NULL,
            value_per_minute DOUBLE NOT NULL
         );

         CREATE TABLE IF NOT EXISTS plan_info (
            id INT PRIMARY KEY AUTO_INCREMENT,
            plan_name VARCHAR(255) NOT NULL UNIQUE,
            minutes INT NOT NULL
         );

         CREATE TABLE IF NOT EXISTS results (
            id INT PRIMARY KEY AUTO_INCREMENT,
            source VARCHAR(255) NOT NULL,
            destiny VARCHAR(255) NOT NULL,
            value_per_minute DOUBLE NOT NULL,
            time INT NOT NULL,
            plan_name VARCHAR(255) NOT NULL,
            res_with_faleMais DOUBLE NOT NULL,
            res_dont_faleMais DOUBLE NOT NULL
         );
      `
   )
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError);

const insertAreaCodes = () => connection("area_code_list")
   .insert(areaCode)
   .then(() => { console.log("Predefinições geradas(area codes)") })
   .catch(printError);

const insertPresets = () => connection("preset_list")
   .insert(presetPrices)
   .then(() => { console.log("Predefinições geradas(calls)!") })
   .catch(printError);

const insertPlans = () => connection("plan_info")
   .insert(plans)
   .then(() => { console.log("Predefinições geradas(plans)!") })
   .catch(printError);

const closeConnection = () => { connection.destroy() };

createTables()
   .then(insertAreaCodes)
   .then(insertPresets)
   .then(insertPlans)
   .finally(closeConnection);