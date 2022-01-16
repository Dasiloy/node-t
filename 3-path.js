const path = require("path");

const sep = path.sep;
console.log(sep);

const relative = path.join("secrets", "texts", "text.txt");
console.log(relative);

const absolute = path.resolve("secrets", "texts", "text.txt");
console.log(absolute);

const base = path.basename(relative);
console.log(base);
