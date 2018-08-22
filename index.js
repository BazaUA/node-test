import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = process.env.PORT || 3000;

app.use('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(port, () => {
  console.log('Running on port ', port); // eslint-disable-line no-console
});
