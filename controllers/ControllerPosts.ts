import { Request, Response } from 'express';
import PostServices from '../services/postService';

const services = new PostServices();

const getAllPosts = async (_req: Request, res: Response) => {
    const posts = await services.getAll();
    return res.status(200).json(posts);
}

const getIdPost = async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await services.getById(+id);
    return res.status(200).json(post);
}

const deletePost = async (req: Request, res: Response) => {
    const { id } = req.params;
    await services.remove(+id);
    return res.status(201).end();
}

const editPost = (req: Request, res: Response) => {
    return res.json({});
}

const searchPost = (req: Request, res: Response) => {
    return res.json({});
}

export { getAllPosts, getIdPost, deletePost, editPost, searchPost };
