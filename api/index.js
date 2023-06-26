import express from "express";

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});

app.get("/", (req, res) => {
    return res.sendStatus(200);
});

app.post("/", (req, res) => {
    return res.sendStatus(202);
});

app.listen(9090, () => console.log("Server running on port 9090..."));