const WebSocketServer =  require('ws');
const sio = require('socket.io'); 
const dbMongoRunner = require ('./mongoDB');

 /**
  * Get port from environment and store in Express.
  */
 const run = (httpServer) => {
    const io = sio(httpServer);

    io.on('connection', (socket)=> {
        // let inform = null;
        socket.on('/creatNewArticle', async (data) => {
            const { articleName, article} = data;
            
            dbMongoRunner.runner();
            dbMongoRunner.createNewArticle(articleName, article);
            const allartcile = await dbMongoRunner.findAllArticle();

            socket.emit('/returAllArticle', allartcile );
        });

        socket.on('disconnect', () => {
            // asd
        });
    });
}
module.exports = run;