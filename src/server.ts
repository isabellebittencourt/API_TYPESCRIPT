import express from 'express';
import { routes } from './config/router';

const app = express();
app.use(routes);

app.listen(3333, () => {
    console.log('Lorena servidores ta rodando, taquele pau ')

})

