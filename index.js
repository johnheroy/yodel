var Yodel = function(){

};

Yodel.prototype.newYoReceived = function(req){
  var toUser = req.params.touser;
  var fromUser = req.params.username;

  console.log(toUser, 'to user');
  console.log(fromUser, 'from user');
};

module.exports = new Yodel();