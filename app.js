const express = require("express");
const path = require("path");
const app = express();

//GET
app.get('/api/forTaxi', () => )

app.use(
  express.static(
    path.resolve(__dirname, "projectSources/static/chooseRole/choose-role")
  )
);

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(
      __dirname,
      "projectSources/static/chooseRole/choose-role",
      "main.html"
    )
  );
});

app.listen(3000, () => console.log("Server has been started on port 3000"));
