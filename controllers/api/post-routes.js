const router = require('express').Router();
const sequelize = require('../../config/connection')
const { Post, User } = require('../../models');

router.get ('/', (req, res) => {
    console.log('Grabbing Posts');
    Post.findAll({
       attributes: [
        'id',
        'post_url',
        'title',
        'created_at',
    ],
    include: [
        {
            model: User,
            attributes:['username'] 
        }
    ]
    })
    .then (dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get ('/:id', (req, res) => {
    console.log('Grabbing Posts');
    Post.findOne({
       attributes: [
        'id',
        'post_url',
        'title',
        'created_at',
    ],
    include: [
        {
            model: User,
            attributes:['username'] 
        }
    ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;