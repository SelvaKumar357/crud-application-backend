import User from "../model/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, address } = req.body;

    if (!name || !email || !address) {
      return res.status(400).send({ message: "All fields are required." });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).send({ message: "email id already exists." });
    }

    const newUser = new User({ name, email, address });
    const savedData = await newUser.save();

    // res.status(201).send(savedData);
    res.status(200).json({message: "User Created Successfully...."})
  } catch (error) {
    res.status(500).send({ errorMessage: error.message });
  }
};


export const getAllUsers = async(req,res)=> {
  try {
    const userData = await User.find();
    if(!userData || userData.length === 0){
      return res.status(404).send({msg:"User data not found"})
    }
    res.status(200).send(userData);
  } 
  catch (error) {
    return res.status(500).send({error: error.message})
  }
}

export const getUserById = async(req,res)=> {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if(!userExist){
      return res.status(404).send({message: "User Not Exists"});
    }
    return res.status(200).send(userExist);
  } 
  catch (error) {
    return res.status(500).send({errorMessage:error.message})
  }
}

export const updateUser = async(req,res) =>{
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
  if(!userExist){
    return res.status(404).send({message: "User Not Exists"})
  }
  const updatedData = await User.findByIdAndUpdate(id, req.body, {
    new: true
  })
  // res.status(201).send(updatedData);
  res.status(200).json({message: "User Updated Successfully.."})
  } catch (error) {
    return res.status(404).send({error: error.message})
  }
}

export const deleteUser = async(req, res)=> {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if(!userExist){
      return res.status(404).send({message: "User Not Exists"});
    }
    await User.findByIdAndDelete(id);
    res.status(201).send({messsage: "User Deleted Successfully"});
  } catch (error) {
    
  }
}
