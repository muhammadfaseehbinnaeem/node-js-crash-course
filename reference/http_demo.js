const http =  require('http');

http.
    createServer((req, res) => {
        res.write('<b>Hello World!</b>');
        res.end();
    })
    .listen(5000, () => console.log('Server running...'));