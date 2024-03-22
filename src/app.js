import express from 'express';
import routes from './routes/index.js';
import unleash from './services/unleash.js';

const app = express();
app.use(express.json());
routes(app);

setInterval(() => {
  // eslint-disable-next-line no-console
  console.log(
    unleash.isEnabled('eventos')
      ? 'feat eventos habilitado' : 'feat eventos desablitado',
  );
}, 2000);

export default app;
