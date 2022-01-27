<?php
require("sources.php");

$result = mysqli_query($connect, "SELECT * FROM TaxiBD WHERE District = '".$_POST["parkingPeople"]."'");

$title = "Парковки рядом с вами ТАКСИ РЕЖИМ!";

if(!$result || mysqli_num_rows($result) == 0){
    $content1='
    <div class="card">
        <div class="warning">
            К сожалению, парковок с таким районом нет(
        </div>
        
    </div>
    ';
}else{
    while($parkP = mysqli_fetch_assoc($result)){
    
    
        $content1 .= '
        <div class="card__block">
            <div class="main__info">
                <div class="name"><span>'.$parkP["Name"].'</span></div>
                <div class="address"><span>'.$parkP["Address"].'</span></div>
            </div>
            <div class="card__info">
                <div class="info__block">
                    <div class="info__text">Мест:</div>
                    <div class="info__answer">'.$parkP["CarCapacity"].'</div>
                </div>
                <div class="info__block">
                    <div class="info__text">Работает:</div>
                    <div class="info__answer">'.$parkP["Mode"].'</div>
                </div>
            </div>
            <div class="map"></div>
            <a href="/addComment.php?id='.$parkP['Id'].'"><div class="comment__button">Обратная связь</div></a>
      </div>
        ';
    }
}

$content ='
    <div class="get__content">
                '.$content1.'
    </div>
    <a class="btn-back" href="searchTaxi.php"></a>
';

require("template.php");

?>