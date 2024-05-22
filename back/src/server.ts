import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/router";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
	console.log("⚡[Server]: Listening in port " + PORT);
});
