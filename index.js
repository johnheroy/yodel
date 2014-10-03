var Yodel = function(){

};

Yodel.prototype.parseYo = function(req){
  var toUser = req.params.touser;
  var fromUser = req.query.username;
  console.log('* new Yo received *');
  console.log('to user', toUser);
  console.log('from user', fromUser);
  return {'toUser': toUser, 'fromUser': fromUser};
};

module.exports = new Yodel();