import express from "express";
import { helloWorld } from "./routes";

const app = express();

app.get("/", helloWorld);

app.listen(3333);

//https://www.notion.so/Typescript-5712aeab312d44fcba0aa88895caad36
