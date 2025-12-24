import user from "../models/user.model.js";
import bcrypt from 'bcrypt';
export async function userRegister(req, res) {
  const { fullname, email, password } = req.body;
  const hashPassword=await bcrypt.hash(password,10)
  console.log(hashPassword)
  const newUser = await user.create({
    fullname:{
      firstname:fullname.firstname,
      lastname:fullname.lastname,

    },
    email,
    password:hashPassword
    ,
  });
  res.status(500).json({newUser });
}

export async function userLogin(req, res) {
  const { email, password } = req.body;
  const userauth=await user.findOne({email})
  if(!userauth){
    return res.status(401).json({"message":"Something went wrong"})
  }
  const isPasswordMatch=await bcrypt.compare(password,userauth.password)
  if(!isPasswordMatch){
    return res.status(401).json({"message":"Something went wrong"})
  }
  res.status(201).json({"message":"login successfully"})
  
  
  
}
