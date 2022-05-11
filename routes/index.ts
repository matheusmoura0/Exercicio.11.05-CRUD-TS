import { Router } from 'express';
import { getIdPost, getAllPosts, deletePost, editPost, searchPost } from '../controllers/ControllerPosts';

const routes = Router();


routes.get('/posts', getAllPosts);
routes.delete('/posts', deletePost);
routes.put('/posts', editPost);

routes.get('/posts/search', searchPost);
routes.get('/post/:id', getIdPost);

export default routes;
