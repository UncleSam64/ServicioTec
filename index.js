const express = require("express");
const app = express();
const PORT = 8080;

app.get("/hello", (req, res) => {
    res.send("Hello World!");
});
app.post("/hello", (req, res) => {
    res.send("Item created");
});

app.put("/hello/:id", (req, res) => {
    res.send(`Updated item with id: ${req.params.id}`);
});

app.delete("/hello/:id", (req, res) => {
    res.send(`Deleted item with id ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
