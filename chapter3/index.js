const http = require('http');

http.createServer( (req, res) => {
    let {url, headers, method } = req;
    let body = {};

    req.on('data', (data) => {
        data.toString().split('&').map(item => {
            let s = item.split('=')
            let key = s[0];
            let value = s[1];
            body[key] = value;
        });
    }).on('end', () => {
        console.log(body);

        if (method === 'POST') {
            res.writeHead(200);
            if (url === '/users') {
                res.end('/user 정보 추가');
            }else if(url === '/board') {
                res.end('/board  게시글 추가');
            }else if(url === '/cloth') {
                res.end('/cloth 옷 추가');
            }
        }

        res.writeHead(404);
        res.end('Not Found Page...');
    }).on('error', (err) => {
        console.log(err);
        res.writeHead(400);
        res.end('Server Error!!!');
    });

}).listen(3000, () => {
    console.log('server on port: 3000');
});