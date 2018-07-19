var express = require('express');
var config = require('../config/index');
var port = process.env.PORT || config.build.port; 
var app = express();
// mock数据
var mockData = require('../data.json');
var seller = mockData.seller;
var goods = mockData.goods;
var ratings = mockData.ratings;
var aInfo = mockData;
// router配置
var router = express.Router();
app.use(express.static('./dist'));
// router.get('/',function(req,res,next){
//   req.url = './index.html';
//   next();
// });
router.get('/api/seller',function(req,res){
  res.json(seller);
});
router.get('/api/goods',function(req,res){
  res.json(goods);
});
router.get('/api/ratings',function(req,res){
  res.json(ratings);
});
router.get('/api/all',function(req,res){
  res.json(aInfo);
});
app.use(router);
module.exports = app.listen(port,function(error){
  if (error){
    console.log(error);
  }else{
    console.log('The Server Is Running At port:' + port);
  }
})


