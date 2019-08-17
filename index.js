const http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200);
//     res.end('hello world');
// }).listen(3000, function () {
//     console.log('server on port: 3000');
// });

http.createServer((req, res) => {
    // console.log(req);

    let { url, headers, method } = req;
    let body = {};
    console.log(url, method);

    req.on('data', (data) => {
        // console.log(data);
        console.log(data.toString());

        data.toString().split('&').map(item => {
            let s = item.split('=');
            let key = s[0];
            let value = s[1];
            body[key] = value;
        });
    }).on('end', () => {
        console.log(body);
    }).on('error', (err) => {
        console.log(err);
    });

    let resData = '<html><body><h1>Hello World</h1></body></html>';

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(resData);
}).listen(3000, () => {
    console.log('server on port: 3000');
});