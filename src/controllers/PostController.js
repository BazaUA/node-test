/* eslint-disable no-console */
const postModel = require('../model/PostModel');
const connect = require('../db/db');


module.exports = () => {
  let model;
  const connection = connect();
  postModel(connection)
    .then((dbModel) => {
      model = dbModel;
    })
    .catch(err => (console.error('Error: ', err)));

  const getById = (req, res) => {
    const { id } = req.params;
    model.findById(id)
      .then((result) => {
        if (result === null) {
          res.status(404).send('no post found');
        } else {
          res.json(result.dataValues);
        }
      })
      .catch(err => (console.log(err)));
  };

  const getAll = (req, res) => {
    model.findAll()
      .then((posts) => {
        res.json(posts);
      })
      .catch(err => res.status(500).send(err));
  };

  const create = (req, res) => {
    const post = req.body;
    model.create(post)
      .then(result => res.status(201).send(result))
      .catch(err => res.status(500).send(err));
  };

  const deleteById = (req, res) => {
    const { id } = req.params;
    model.findById(id)
      .then((post) => {
        if (post !== null) {
          post.destroy();
        } else {
          res.status(404).send();
        }
      }).then(() => res.status(204).send())
      .catch(err => (res.status(500).send(err)));
  };

  const update = (req, res) => {
    const updatedPost = req.body;
    const { id } = updatedPost;
    model.findById(id)
      .then((post) => {
        if (post !== null) {
          post.updateAttributes(updatedPost);
        } else {
          res.status(404).send();
        }
      }).then(() => res.status(200).send())
      .catch(err => (res.status(500).send(err)));
  };

  return {
    getById,
    getAll,
    create,
    deleteById,
    update,
  };
};
