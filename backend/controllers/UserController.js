import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//register user
const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email is already registered!",
        err: ["Email is already registered!"],
      });
    }
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    // console.log("i mahere", name, email, password);

    const newUser = await User.create({ name, email, password: hashedPass });
    await newUser.save();
    res.status(200).json({
      message: "User created",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const LoginUser = async (req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({
            message: "User not registered!",
          });
        }
        //check valid password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({
            message: "Invalid Password!",
          });
        }
        //genarate jwt
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        //send token to cookie (http only:deny user to acces cookie from client side : it can only be accesed via http)
        res.cookie("token", token, {
          httpOnly: false, //setting false se that i can acees cookie from frontend
          maxAge: 24 * 60 * 60 * 1000,
        });
        
        
        //send the response
        res.status(200).json({
          status: "Success",
          message: "Logged in Successfully",
          data: user,
        });
      } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
}
export { RegisterUser,LoginUser };
