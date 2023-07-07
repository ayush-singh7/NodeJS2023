import { log } from "console";
import express from "express";
const app = express();
import jwt from 'jsonwebtoken';
import { connect } from "./db/database";
import UserModel from "./db/models/user";
const TOKEN_KEY = "ayush"


app.use(express.json())

app.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { first_name, last_name, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await UserModel.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
    //   encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await UserModel.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });

  app.post("/login", async (req, res) => {

    // Our login logic starts here
    try {
      // Get user input
      const { email, password } = req.body;
  
      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await UserModel.findOne({ email });
  
    //   if (user && (await bcrypt.compare(password, user.password))) {
      if (user && (user.password === password)) {

        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });



app.listen(3000,()=>{
    connect();
    console.log("LISTENING ON 3000");

})