import express from "express";

import { JhhApp } from "../src/providers/jhh-app";
import { MongoDB } from "../src/providers/mongo-db";

const jhhApp = new JhhApp(express(), express.Router());
const mongoDB = new MongoDB();

mongoDB.connectToDatabase();
jhhApp.initServer();
