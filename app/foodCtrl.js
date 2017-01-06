var app = require('./server');
var db = app.get('db');

module.exports={

  read_foods:function(req,res) {
    db.read_foods(function(err,foods) {
      if(!err){
        res.status(200).json(foods);
      }
      else {
        res.status(422).json(err);
      }
    })
  },
  read_food:function(req,res) {
      console.log('sighting');
      var query = req.params.id;
      if (query) {
        db.read_food([query],function(err, foods) {
          if(!err){
            res.status(200).json(foods);
          }
          else res.status(200).json(err);
        });
      }
      else{
        db.read_foods(function(err, foods) {
            if(!err){
              res.status(200).json(foods);
            }
            else res.status(422).json(err);
        });
      }
   },
   create_product:function(req,res) {
     db.create_product([req.body.name,req.body.description,
       req.body.price,req.body.imageurl],function(err,response) {
       if(!err){
         res.status(200).send(response);
       }
       else res.status(422).send(err);
     })
   },
   update_product:function(req,res) {
     var q = req.params.productId;
     db.update_product([q,req.body.description],function(err,response) {
       if(!err){
         res.status(200).json(response);
       }
       else res.status(422).json(err);
     })
   },
   delete_product:function(req,res) {
     var q = req.params.productId;
     db.delete_product([q],function(err,response) {
       if(!err){
         res.status(200).send(response)
       }
       else res.status(422).send(err);
     })
   }
