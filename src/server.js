import server from "./app.js";
import config from "./config/index.js";

const port = 4000 || config.PORT;

server.listen(port,()=>{
	console.log(`Server is running on ${port}`);
});

export default server;