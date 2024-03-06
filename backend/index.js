const {Server}=require('socket.io');
const http=require('http')

//const app=express();
const server=http.createServer((req,res) =>{
    if(req.url==='/'){
        res.end('hello')
    }
})

server.listen(8080);
const websocketserver=new Server(app)