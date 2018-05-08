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
  app.get("/api/blog/:category", function(req,res){
    models.Post.findAll({where: { category: req.params["category"]}}, function(result){
      res.json(result);
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
      body: req.body.body,
      title: req.body.title,
      category: req.body.category
    },{
      where: {
        id: req.body.id
      }
    });
  });
};
