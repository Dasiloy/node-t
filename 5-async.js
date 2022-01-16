const fs = require("fs");

const { readFile, writeFile } = fs;

readFile("./secrets/texts/text.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const first = result;
	readFile("./secrets/texts/text2.txt", "utf8", (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;
		writeFile("./secrets/texts/text3.txt", `${first} ${second}`, (err, result) => {
			if (err) return;
			console.log(result);
		});
	});
});
