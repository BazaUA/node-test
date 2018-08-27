import { Router } from 'express';
import postController from '../controllers/PostController';

const postRouter = Router();


const router = () => {
  const {
    getById, getAll, create, deleteById, update,
  } = postController();
  postRouter.route('/')
    .get(getAll)
    .post(create)
    .put(update);
  postRouter.route('/:id')
    .get(getById)
    .delete(deleteById);
  return postRouter;
};

export default router;
