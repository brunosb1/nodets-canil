import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname,'../public')));

// Rotas

//utilizando a rota home do mainRoutes
server.use(mainRoutes);

//página nao encontrada
server.use((req, res)=>{
    res.send('pagina nao encontrada');
})



server.listen(process.env.PORT);