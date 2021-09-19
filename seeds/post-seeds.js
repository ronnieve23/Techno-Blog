const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec posuere metus vitae ipsum.',
        post_url: 'google.com',
        user_id: 1
      },
      {
        title: 'Morbi non quam nec dui luctus rutrum.',
        post_url: 'https:google.com',
        user_id: 2
      },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;