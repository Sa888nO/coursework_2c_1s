<?php
require("sources.php");

$text = $_POST["mess"];
$id = $_POST["p_id"];

mysqli_query($connect, "INSERT INTO Comments (Id, Comment, park_id) VALUES (NULL,'$text', '$id')");

require("index.php");
?>