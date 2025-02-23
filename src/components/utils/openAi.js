import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
  maxRetries: 2,
  max_tokens: 50,
});

export default openai;
