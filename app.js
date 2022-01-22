const express = require("express");
const app = express();
const port = process.env.PORT || 3500;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./settings/routes");
routes(app);

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});

/* 
const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql2");

// подключение к бд
const connection = mysql.createConnection({
  host: "std-mysql.ist.mospolytech.ru",
  user: "std_1550_my_cours_work",
  database: "std_1550_my_cours_work",
  password: "11111111",
});
// тестирование подключения
connection.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});
const sql = `SELECT * FROM PeopleBD`;

connection.query(sql, function (err, results) {
  if (err) console.log(err);
  console.log(results);
});
// закрытие подключения
connection.end(function (err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});

app.use(
  express.static(
    path.resolve(__dirname, "projectSources/static/chooseRole/choose-role")
  )
);

app.get("/main", (req, res) => {
  res.sendFile(
    path.resolve(
      __dirname,
      "projectSources/static/chooseRole/choose-role",
      "main.html"
    )
  );
});
app.get("/PeopleBD", (req, res) => {
  connection.query("SELECT * FROM PeopleBD", function (error, results, fields) {
    if (error) throw error;

    res.send(results);
  });
});

app.listen(3000, () => console.log("Server has been started on port 3000"));
*/
