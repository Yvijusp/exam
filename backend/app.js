import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Models
import User from './models/UserModel.js';

// Connection to MongoDB

mongoose
  .connect(process.env.MONGODB_URI)
  .then((response) =>
    app.listen(process.env.PORT, () =>
      console.log(
        `Server is running on ${process.env.PORT} and connected to Database`
      )
    )
  );

// Route that tells if API is running
app.get('/', (req, res) => {
  res.send({ messsage: 'API is running' });
});

// Get's all users from database
app.get('/users', async (req, res) => {
  const userData = await User.find();

  res.send(userData);
});

// Add a user to database
app.post('/users/register', async (req, res) => {
  const user = req.body;
  if (!user) return res.status(400).send({ error: 'Wrong user input' });

  const newUser = new User(user);

  newUser.save();

  res.send({ message: 'Registered successfully' });
});

// Update user and send it to database
app.put('/users/update/:id', async (req, res) => {
  const user = req.body;
  const userId = req.params.id;
  if (!userId)
    return res.status(400).send({ error: "This user doesn't exist" });

  const updatedUser = await User.findByIdAndUpdate(userId, user);

  updatedUser.save();

  res.send(updatedUser);
});
