import Message from "../models/messageModel";

const getMessages = async (req, res) => {
  const messages = await Message.find({});
  res.json(messages);
};
const createMessage = async (req, res) => {


  try {
    const { name, email, org, msg } = req.body;

    const message = await Message.create({
      name,
      email,
      org,
      msg,
    });
  
    if (message) {
      res.status(201).json({
        name: message.name,
        email: message.email,
        org: message.org,
        msg: message.msg,
      });
    } else {
      res.status(400).send("Error")
      
    }
  } catch (error) {
    console.log(error)
    res.status(400).send("Error")
  }

};
export { getMessages, createMessage };
