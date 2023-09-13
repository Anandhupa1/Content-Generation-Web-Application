const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.port || 4000;
const axios  = require("axios");

const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY , // defaults to process.env["OPENAI_API_KEY"]
});



app.get("/shayari",async(req,res)=>{
    try {
      let concept = req.query.c||"anything";
      console.log(concept)
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: `Hi , write a shayari about ${concept} , more than 20 words in hindi, also provide its translation` }],
        model: 'gpt-3.5-turbo',
      });
      
      console.log(completion.choices);
      res.send(completion.choices[0].message.content)

      } catch (error) {
        console.error('Error:', error.response.data);
        res.status(500).json({ error: 'Something went wrong' });
      }
})







app.listen(port,()=>{
    console.log(`app started at port ${port}`);
})