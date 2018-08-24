export default (postModel) => {
  const getById = async (req, res) => {
    const { id } = req.params;
    const post = await postModel.findById(id);
    res.json(post);
  };

  return {
    getById,
  };
};
