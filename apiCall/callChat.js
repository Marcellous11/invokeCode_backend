import OpenAI from "openai";

async function chat(question) {
	// This code is for v4 of the openai package: npmjs.com/package/openai

	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY,
	});
	try {
		const { choices } = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "user",
					content: question,
				},
			],
			temperature: 1,
			max_tokens: 256,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		});
		console.log(choices);
		return choices[0].message.content;
	} catch (e) {
		return e;
	}
}
export default chat;
