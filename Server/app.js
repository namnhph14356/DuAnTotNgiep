import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import morgan from 'morgan'
import homeRouter from './routes/home';
import { checkAuth } from './midlerware/checkAuth';

import routeCategory from './routes/category';
// <<<<<<< HEAD
import routeAuth from './routes/auth';
// =======
import routerSpeak from './routes/speak';
import routerQuiz from './routes/quiz';
import routerListenWrite from './routes/listenWrite'; 
//----------------QUESTION------------------------ 

import routerAnswerSpeak from './routes/answerSpeak';
import routerAnswerQuiz from './routes/answerQuiz';
import routerAnswerListenWrite from './routes/answerListenWrite';
//----------------ANSWER------------------------ 

import routerUserSpeak from './routes/userSpeak';
import routerUserQuiz from './routes/userQuiz';
import routerUserListenWrite from './routes/userListenWrite';
//-----------------USER-ANSWER------------------------ 

// >>>>>>> 797b3a193384639fdbedaad3cf45c4b45ac6126c

const app = express();
const path = require("path");

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
require('dotenv').config()


app.use("/", homeRouter )
app.use("/api",checkAuth, routeCategory);

app.use("/api", routerSpeak )


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("DB not connected ", error));


// app.use(express.static(path.join(__dirname, "./frontend/build")));

// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./frontend/build/index.html"),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("Server is running on port 8000");
});