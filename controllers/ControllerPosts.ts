import { Request, Response } from 'express';

const exportAllPosts = (req: Request, res: Response) => {
    return res.json({});
}

const exportUserPost = (req: Request, res: Response) => {
    return res.json({});
}

const deletePost = (req: Request, res: Response) => {
    return res.json({});
}

const editPost = (req: Request, res: Response) => {
    return res.json({});
}

export { exportAllPosts, exportUserPost, deletePost, editPost };
