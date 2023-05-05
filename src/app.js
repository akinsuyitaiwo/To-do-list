import express from "express";
import cors from "cors";
import config from "./config/index.js";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
	res.send(`welcome to ${config.APP_NAME}`);
});

app.use((req,res)=>res.status(404).send({
	success: false,
	message:"Invalid route"
}));
export default app;