import express from 'express';
import env from './config/env';
import connectAtlas from './config/atlas';
import routes from './routes';
import cors, { CorsOptions } from 'cors';
require('dotenv').config();

// Connect MongoDB
connectAtlas();

// Cors
const corsOptions: CorsOptions = {
  origin: (origin: string | undefined, callback: any) => {
    if (true) { // origin input required
      callback(null, true);
    } else {
      callback(new Error('Not Allowed Origin!'));
    }
  },
  credentials: true,
};

// Use Express
const app = express();
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app
  .listen(env.port, () => {
    console.log(`
    ################################################
            🛡️  Server listening on ${process.env.PORT} 🛡️
    ################################################
  `);
  })
  .on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
app.get('/', (_, res) => {
  res.send('server clear');
});
