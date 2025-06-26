import OpenAI from "openai";

const client = new OpenAI({
  //  apiKey: process.env['OPENAI_API_KEY'],
  apiKey: process.env.REACT_APP_OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default client;
