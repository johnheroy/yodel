var Yodel = function(){

};

Yodel.prototype.parseYo = function(req){
  var toUser = req.params.touser;
  var fromUser = req.query.username;
  var link = req.query.link || null;
  console.log('* new Yo received *');
  console.log('to user', toUser);
  console.log('from user', fromUser);
  if (link){ console.log('with link', link); }
  return {
    'toUser'  : toUser,
    'fromUser': fromUser,
    'link'    : link
  };
};

module.exports = new Yodel();