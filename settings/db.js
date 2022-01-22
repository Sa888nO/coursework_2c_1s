const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "std-mysql.ist.mospolytech.ru",
  user: "std_1550_my_cours_work",
  database: "std_1550_my_cours_work",
  password: "11111111",
});

connection.connect((error) => {
  if (error) {
    return console.log("Ошибка");
  } else {
    return console.log("Подключение успешно!");
  }
});

module.exports = connection;
