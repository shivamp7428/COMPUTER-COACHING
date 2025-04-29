import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './confige/db.js';
import UserRouter from './route/userRoute.js';
import session from 'express-session';
import passport from 'passport';
import './confige/password.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

// Sessions
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/v1/User', UserRouter);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
