var models = require('../models');

module.exports = function(app) {
  app.get('/api/blog', function(req, res) {
    models.Post.findAll().then(function(results) {
      console.log(results);
      res.json(results);
    });
  });

  app.post('/api/posts', function(req, res) {
    models.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    });
  });

  app.delete('/api/posts/:id', function(req, res) {
    models.Post.destroy({
      where: {
        id: req.body.id
      }
    });
  });

  app.put('/api/posts/:id', function(req, res) {
    models.Post.update({
      where: {
        id: req.body.id
      }
    });
  });
};
