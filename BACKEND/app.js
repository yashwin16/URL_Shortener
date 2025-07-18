import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/config/mongo.config.js";
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";
import auth_routes from "./src/routes/auth.routes.js";
import short_url from "./src/routes/shortUrl.route.js";
import user_routes from "./src/routes/user.routes.js";
import { attachUser } from "./src/utils/attachUser.js";
import { errorHandler } from "./src/utils/errorHandlers.js";

dotenv.config()

const app = express();

const allowedOrigins = [
  'https://url-shortener-tau-hazel-23.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS Not Allowed"));
    }
  },
  credentials: true
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(attachUser)

app.use("/api/user",user_routes)
app.use("/api/auth",auth_routes)
app.use("/api/create",short_url)
app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)

app.listen(3000,()=>{
    connectDB()
    console.log("Server is running on http://localhost:3000");
})
export default app