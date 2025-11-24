const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
	res.send("Server del mio blog");
	console.log(req.query);
});
