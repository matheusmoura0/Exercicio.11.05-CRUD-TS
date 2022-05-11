import express, { Request, Response } from 'express';
import routes from './routes/index';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('vontade de chorar :smirk:'));
