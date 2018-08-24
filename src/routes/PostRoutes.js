/* eslint-disable no-console */
import { Router } from 'express';
import Sequelize from 'sequelize';
import postController from '../controllers/PostController';
import postModel from '../model/PostModel';

const postRouter = Router();

const sequelize = new Sequelize('mysql://root:root@localhost:3306/db_test');
sequelize
  .authenticate()
  .then(() => (console.log('Connection has been established successfully.')))
  .catch(err => (console.error('Unable to connect to the database:', err)));


const router = () => {
  const model = postModel(sequelize);
  console.log(model);
  const { getById } = postController(model);
  postRouter.route('/:id')
    .get(getById);
  return postRouter;
};

export default router;
