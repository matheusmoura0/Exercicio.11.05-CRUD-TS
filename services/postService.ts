import PostModel from '../models';
import IPost from  '../interfaces/post.interface';

export default class PostServices {
 
 public model = new PostModel();

  public getAll = async (): Promise<IPost[]> => {
    const posts = await this.model.getAll();
    return posts;
  }

  public getById = async (id: number): Promise<IPost> => {
    const post = await this.model.getById(id);
    if (!post) throw ({code: 404, message:'Product not found'});
    return post;
  }

  public create = async (post: IPost): Promise<IPost> => {
    const newPost = await this.model.create(post);
    return newPost;
  }

  public updated = async (id: number, post: IPost): Promise<IPost> => {
    await this.getById(id);
    const postUpdated = await this.model.update({id, ...post});
    return postUpdated;
  }

  public remove = async (id: number): Promise<void> => {
    await this.getById(id);
    await this.model.delete(id);
  }
 
  // public search = async (q: string | Date): Promise<IPost> => {
  //   const post = await this.model.search(q);
  //   return post
  // }

}