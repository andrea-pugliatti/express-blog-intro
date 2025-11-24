const express = require("express");

const app = express();
const PORT = 3000;

const posts = [
	{
		id: 1,
		title: "Il mio primo giorno a scuola",
		content: "Lorem",
		img: "/images/ciambellone.jpeg",
		tags: ["scuola", "security policy"],
	},
	{
		id: 2,
		title: "Il mio secondo giorno a scuola",
		content: "Lorem",
		img: "/images/cracker_barbabietola.jpeg",
		tags: ["scuola", "assistenza clienti"],
	},
	{
		id: 3,
		title: "Il mio terzo giorno a scuola",
		content: "Lorem",
		img: "/images/pane_fritto_dolce.jpeg",
		tags: ["scuola", "management"],
	},
	{
		id: 4,
		title: "Il mio quarto giorno a scuola",
		content: "Lorem",
		img: "/images/pasta_barbabietola.jpeg",
		tags: ["scuola", "macroeconomics"],
	},
	{
		id: 5,
		title: "Il mio quinto giorno a scuola",
		content: "Lorem",
		img: "/images/torta_paesana.jpeg",
		tags: ["scuola", "physics"],
	},
];

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
	res.send("Server del mio blog");
	console.log(req.query);
});

app.get("/bacheca", (_, res) => {
	res.json(posts);
});

app.use(express.static("public"));
