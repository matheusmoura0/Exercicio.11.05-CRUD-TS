import IPost from '../interfaces/post.interface';

import connection from './connection';

export default class PostModel {
  public getAll = async (): Promise<IPost[]> => {
    const [post] = await connection.execute(
      'SELECT * FROM TypeScriptExpress.Posts',
    );
    return post as IPost[];
  }

  public getById = async (id: number): Promise<IPost> => {
    const [result] = await connection.execute(
      'SELECT * FROM TypeScriptExpress.Posts WHERE id=?',
      [id]
    );
     const [post] = result as IPost[];
     return post;
  }

  public create = async (post: IPost): Promise<IPost> => { 
    const { id, title, author, category, publicationDate } = post;
    const [result] = await connection.execute(
      'INSERT INTO TypeScriptExpress.Posts (title, author, category, publicationDate) VALUES (?, ?, ?, ?)',
      [title, category, id, publicationDate, author]
    );
    const [newPost] = result as IPost[];
    return newPost;
  }
  
  public update = async ({title, author, category, publicationDate, id}: IPost): Promise<IPost> => {
    const [result] = await connection.execute(
      'UPDATE TypeScriptExpress.Posts SET title=? author=? category=? publicationDate=? WHERE id=?',
      [title, author, category, publicationDate, id]
    );
    const [post] = result as IPost[];
    return post;
  }

  public delete = async ( id: number): Promise <void> => {
    await connection.execute(
      'DELETE FROM TypeScriptExpress.Posts WHERE id=?',
      [id],
    );
  }
}