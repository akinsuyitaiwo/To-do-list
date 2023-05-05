import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
	res.send("welcome to To-do list home page");
});

app.use((req,res)=>res.status(404).send({
	success: false,
	message:"Invalid route"
}));
export default app;