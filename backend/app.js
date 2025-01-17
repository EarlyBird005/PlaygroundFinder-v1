import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
export const app = express();

app.use(cors({
    origin: true
}));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser());

// middleware imports
import { authAdmin, authUser } from "./middlewares/auth.middleware.js";

// route imports
import userRoute from "./routes/user.route.js";
import playgroundRoute from "./routes/playground.route.js";
import adminRoute from "./routes/admin.route.js";

app.get("/", (req, res) => {
    res.send("Home");
});

// route middlewares
app.use("/api/admin", authUser, authAdmin, adminRoute);
app.use("/api/user", userRoute);
app.use("/api/playground", playgroundRoute);

app.use((err, req, res, next) => {
    // console.log("error middleware:", err);
    res.status(err.status || 500).json({ message: err.message, status: err.status || 500 });
});





/* ~ do not run this code untill necessary ~
to insert data in DB 
import { insertToDB } from "./utils/PGDetailInsert.js";
insertToDB();
*/