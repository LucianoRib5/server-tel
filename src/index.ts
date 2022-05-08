import { app } from "./app";
import { getCallInfo } from "./endpoints/getCallInfo";
import { getPlans } from "./endpoints/getPlans";
import { getAllAreaCodes } from "./endpoints/getAllAreaCodes";
import { createResults } from "./endpoints/createResults";
import { getResult } from "./endpoints/getResult";
import { deleteResult } from "./endpoints/deleteResult";

app.get("/preset/:source/:destiny", getCallInfo);
app.get("/plans", getPlans);
app.get("/areas", getAllAreaCodes);
app.get("/result", getResult);
app.post("/result", createResults);
app.delete("/result", deleteResult);