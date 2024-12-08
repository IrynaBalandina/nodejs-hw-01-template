import mongoose from "mongoose";
import { getEnvVar } from "../utils/gerEnvVar.js";

//  const dbHost = getEnvVar("DB_HOST");

export const initMongoDB = async()=>{
try{
    const user = getEnvVar("MONGODB_USER");
    const password = getEnvVar("MONGODB_PASSWORD");
    const url = getEnvVar("MONGODB_URL");
    const db = getEnvVar("MONGODB_DB");
    await mongoose.connect(`mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`);
//  await mongoose.connect(dbHost);
console.log("Mongo conection successfully");
}catch(error){
    console.log(`Error connection Mongo ${error.message}`);
    throw error;

}
};
