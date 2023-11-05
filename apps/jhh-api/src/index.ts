import express from "express";

import { JhhController } from "./controllers/jhh-controller";

const app = new JhhController(express).createApplication();

const PORT = 8080;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`JHH-API listening at http://localhost:${PORT}`);
});
