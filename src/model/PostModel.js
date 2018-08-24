import Sequelize from 'sequelize';

const PostModel = async (sequelize) => {
  const Post = sequelize.define('posts', {
    id: {
      type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true,
    },
    title: { type: Sequelize.STRING },
    author: { type: Sequelize.STRING },
    content: { type: Sequelize.TEXT },
  });
  await Post.sync();
  return Post;
};

export default PostModel;
