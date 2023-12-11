const User = require("../Models/User");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res, next) => {
  let users;
  console.log("users")
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }
  return res.status(200).json({ users });
};

const signup = async (req, res) => {
  const { First_name,Last_name, email, password, Phone_number,Type_user } = req.body;

//   console.log(req.body)
//   console.log(First_name,Last_name, email, password, Phone_number, Type_user);

  if (
    !First_name ||
    First_name.trim() === "" ||
    !Last_name ||
    Last_name.trim() === "" ||
    !email ||
    email.trim() === "" ||
    !password ||
    password.trim() === "" ||
    !Phone_number ||
    Phone_number.trim() === ""

  ) {
    return res.status(400).json({ message: "Invalid Inputs" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ First_name, Last_name, email, password: hashedPassword, Phone_number, Type_user });
    res.json({ message: 'Signup successful', user });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  console.log(`req body is ${JSON.stringify(req.body)}`);
  const { email, password} = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Invalid Inputs" });
  }

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: 'Incorrect password' });
    }
    res.json({ message: 'Login successful', user });
    if (user["Type_user"] === "Admin")
    {
      console.log("Routing Required");
      // React-Router to Admin page
    }

  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
      user = await User.findByIdAndRemove(id);
    } catch (err) {
      return console.log(err);
    }
    if (!user) {
      return res.status(500).json({ message: "Something went wrong" });
    }
    return res.status(200).json({ message: "Deleted Successfully" });
};


module.exports = { getAllUsers, signup, login, deleteUser };