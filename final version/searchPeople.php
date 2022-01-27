<?php
require("sources.php");

$title = "Введите ваш район";

$content ='
    <div class="search__content">
        <form action="/getPeople.php" method="POST">
            '.$search.'
        </form>
    </div>
    <a class="btn-back" href="index.php"></a>
';

require("template.php");
?>