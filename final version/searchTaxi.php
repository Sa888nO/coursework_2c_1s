<?php
require("sources.php");

$title = "Введите ваш район ТАКСИ РЕЖИМ!";

$content ='
    <div class="search__content">
        <form action="/getTaxi.php" method="POST">
            '.$search.'
        </form>
    </div>
    <a class="btn-back" href="index.php"></a>
';

require("template.php");
?>