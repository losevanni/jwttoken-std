require("dotenv").config();
const aiapikey=require('../config/aiapikey');

import { OpenAIApi } from "openai";
const configuration=await aiapikey.apikey();

exports.ai=async()=>{
    const openai = new OpenAIApi(configuration);
    return openai;
}

// ai_use= await openai.ai();
// const response = await openai.listEngines();    