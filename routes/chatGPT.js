import express from "express";
const app = express();
import chat from "../apiCall/callChat.js";
app.use(express.json());

app.post("/", async (req, res) => {
	// console.log(req.body)
	let { name, month } = req.body;

	let data = await chat(
		`create a nickname from this month and name: ${month}, ${name}. Respond only with the nickname and no other marking. Have the name be at least 10 characters`
	);

	console.log(data);
	res.json(data);
});

export default app;
