const express = require('express');
const router = express.Router();

router
  .get('/', (req, res) => {
    res.render(
      'index',
      {
        data: 'トップページで使うデータ',
        siteInfo: {
          name: 'Web白熱教室',
          owner: 'つよぽん'
        },
        items: [
          {name: 'アイテム1'},
          {name: 'アイテム2'},
          {name: 'アイテム3'},
        ],
        title: 'トップページのタイトル'
      }
    );
  })
  .get('/about', (req, res) => {
    res.render('about');
  });

module.exports = router;