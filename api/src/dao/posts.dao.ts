import { Model } from 'mongoose';
import Post from '../db/posts';
import { IPost } from '../interfaces/post';

export class PostsDAO {
  private model: Model<any> = Post;

  public async getList(): Promise<any> {
    try {
      const results = await this.model.find({}).populate('authorId', 'firstName lastName');
      return results;
    } catch (err) {
      throw err;
    }
  }

  public async addItem(options: IPost) {
    try {
      await this.model.create(options);
    } catch (err) {
      throw err;
    }
  }

  public async updateItem(options: any): Promise<any> {
    try {
      await this.model.findByIdAndUpdate({ _id: options._id }, options.data);
    } catch (err) {
      throw err;
    }
  }

  public async getItemById(_id: string): Promise<any> {
    try {
      const post = await this.model.findById({ _id });
      return post;
    } catch (err) {
      throw err;
    }
  }

  public async removeItem(_id: string): Promise<any> {
    try {
      const result = await this.model.findByIdAndRemove({ _id });
      return result;
    } catch (err) {
      throw err;
    }
  }

  public async aggragateToListTags() {
    try {
      const result = await this.model.aggregate([
        {
          $group: {
            _id: {},
            tags: { $push: '$tags' },
          },
        },
        {
          $project: {
            _id: 0,
            tags: {
              $setUnion: {
                $reduce: {
                  input: '$tags',
                  initialValue: [],
                  in: { $concatArrays: ['$$this', '$$value'] },
                },
              },
            },
          },
        },
      ]);
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async aggragateByTag(options: any) {
    const { tag } = options;
    try {
      const result = await this.model.aggregate([
        {
          $match: {
            tags: { $in: [tag] },
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'authorId',
            foreignField: '_id',
            pipeline: [{
                $project: {
                    _id: 0,
                    firstName: 1,
                    lastName: 1
                }
            }],
            as: 'authorId',
          },
        },
      ]);
      this.model.updateMany({}, )
      console.log(result);
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
