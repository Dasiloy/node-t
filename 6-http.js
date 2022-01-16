const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("welcome to our homepage");
	} else {
		res.end(`<a href='/'>error</a>`);
	}
});

server.listen(4000);
