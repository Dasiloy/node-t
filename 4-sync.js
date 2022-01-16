const fs = require("fs");

const readFileSync = fs.readFileSync;
const first = readFileSync("./secrets/texts/text.txt", "utf-8");

const writeFileSync = fs.writeFileSync;
writeFileSync("./secrets/texts/text.txt", ` additional text input `, {
	flag: "a",
});
