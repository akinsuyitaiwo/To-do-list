import dotenv from "dotenv";

dotenv.config();

const config = {
	PORT: process.env.PORT,
	APP_NAME: process.env.APP_NAME
};

Object.entries(config).map((key,value)=>{
	if(key && value){ 
		return {key,value};
	}
	if(!key){
		return `missing key: ${key}`;
	}
	if(!value){
		return `missing value for key: ${key}`;
	}
});
export default config;