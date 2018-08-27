/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';

import postRouter from './src/routes/PostRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/post', postRouter());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});


app.listen(port, () => {
  console.log('Running on port ', port);
});
