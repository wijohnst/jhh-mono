import { JhhApp } from "../src/providers/jhh-app";
import { MongoDB } from "../src/providers/mongo-db";
import mongoose from "mongoose";

const jhhApp = new JhhApp();
const mongoDB = new MongoDB();

mongoDB.connectToDatabase();
jhhApp.initServer();
