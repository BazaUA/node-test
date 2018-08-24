import express from 'express';
import bodyParser from 'body-parser';
import Sequelize from 'sequelize';
import postRouter from './src/routes/PostRoutes';
import postModel from './src/model/PostModel';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const sequelize = new Sequelize('mysql://root:root@localhost:3306/db_test');

postModel(sequelize)
  .then((res) => {
    res.findById(1)
      .then((res1) => {
        console.log(res1.dataValues);
      });
  });


app.use('/api/post', postRouter());

const port = process.env.PORT || 3001;

app.use('/', (req, res) => {
  res.send('Welcome to my API');
});


app.listen(port, () => {
  console.log('Running on port ', port);
});
