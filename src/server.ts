import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import http from "http";
import router from "./routers";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);
export const server = http.createServer(app)
