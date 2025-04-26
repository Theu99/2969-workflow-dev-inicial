import express from 'express';
import routes from './routes/index.js';
import unleash from './services/unleash.js';

const app = express();
app.use(express.json());
routes(app);



export default app;
