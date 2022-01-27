<?php
$id = $_GET["Id"];
$title="Оставьте комментарий";

$content ='
    <form action="addNewCom.php" method="POST" class="add__form">
        <textarea type="text" name="mess" cols="25" rows="10" class="search__input"></textarea>
        <input type="hidden" name="p_id" value="'.$id.'">
        <div>
            <input type="submit" value="Отправить" class="search__btn" />
        </div>
    </form>
';

require("template.php");

?>
