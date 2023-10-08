import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

export default openai;
