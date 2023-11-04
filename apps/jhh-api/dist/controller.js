import express from "express";
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(PORT, () => {
    console.log(`JHH-API listening at http://localhost:${PORT}`);
});
