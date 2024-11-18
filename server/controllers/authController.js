import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, error: "User Not Found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Wrong Password" });
    }

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY, // Ensure JWT_KEY is defined in your environment variables
      { expiresIn: "10d" }
    );

    return res.status(200).json({
      success: true,
      token,
      user: { _id: user._id, name: user.name, role: user.role },
    });

  } catch (error) {
    console.error(error); // Log the error for server-side debugging
    return res.status(500).json({ success: false, error: error.message });
  }
}

const verify = (req,res)=>{
  return res.status(200).json({success: true, user: req.user})
}

export { login, verify };
