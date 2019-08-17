const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {
    let {url} = req;

    fs.readFile('.' + url, (err, data) => {
        if(!err) {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
            return
        }else if(err && err['errno'] === -2) {
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('Not Found File');
            return
        }

        res.writeHead(500);
        res.end('server error');
    })
}).listen(3000, () => {
    console.log('server on port: 3000');
});

// fs.readFile('./test.html', (err, data) => {
//     if(!err) {
//         console.log('test.html 파일 읽기 성공');
//         console.log(data);
//         console.log(data.toString());
//         return
//     }
//     console.log(err);
// });
//
// fs.readFile('./test.txt', (err, data) => {
//     if(!err) {
//         console.log('test.txt 파일 읽기 성공');
//         console.log(data);
//         console.log(data.toString());
//         return
//     }
//     console.log(err);
// });