import express from "express";
const app = express();
import ChatGPT from "./routes/chatGPT.js";
import { configDotenv } from "dotenv";
import cors from "cors";

configDotenv.apply();

app.use(cors());
app.use("/api", ChatGPT);

// app.get("/hello",(req,res)=>{
//     res.send("hello")
// })

app.listen(3001, () => {
	console.log("server started on port 3001");
});
