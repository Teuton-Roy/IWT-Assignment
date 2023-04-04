const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	// parse the URL to get the date of birth
	const query = url.parse(req.url, true).query;
	const dob = new Date(query.dob);
	
	// calculate the age
	const today = new Date();
	const age = today.getFullYear() - dob.getFullYear();
	if (today < new Date(today.getFullYear(), dob.getMonth(), dob.getDate())) {
		age--;
	}
	// render the age as a webpage
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<html><head><title>Your Age</title></head><body>');
	res.write('<h1>Your Age</h1>');
	res.write('<p>You were born on ' + dob.toLocaleDateString() + '.</p>');
	res.write('<p>You are currently ' + age + ' years old.</p>');
	res.write('</body></html>');
	res.end();
});

server.listen(8000, () => {
	console.log('Server started on port 8000');
});
