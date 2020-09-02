const Users = require("../schemas/users");
let loginUser = async (req) => {
  const userinfo = await Users.find({email:req.email,password:req.password});
  return userinfo
}
let registerUser = async (params) => {
 let query={
 	name: params.name,
 	displayname: params.displayname,
 	email:params.email,
 	password:params.password
 }
 let add=new Users(query)
 let result=await add.save()
 return result
}
let userList = async () => {
  const userinfo = await Users.find();
  return userinfo
}
module.exports = {
    loginUser,
    registerUser,
    userList
};
