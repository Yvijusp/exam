import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

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
