import { Router } from 'express';
import { exportUserPost, exportAllPosts, deletePost, editPost } from '../controllers/ControllerPosts';

const routes = Router();

routes.post('/posts', exportUserPost);
routes.get('/posts', exportAllPosts);
routes.delete('/posts', deletePost);
routes.put('/posts', editPost);
