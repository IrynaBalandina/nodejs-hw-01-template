import { startServer } from "./server.js";
import { initMongoDB } from "./db/initMongoDB.js";

// jfN.SC3hbAzcZLC    password mongo db
const bootstrap = async()=>{
await initMongoDB();
startServer();
};

bootstrap();
