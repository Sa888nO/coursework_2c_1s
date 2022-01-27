<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php $title; ?></title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <div class="header__text"><?=$title;?></div>
        </div>
    <main class="main">
        <?=$content;?>
    </main>
        <div class="footer">
            <div class="footer__text">
            Мы хотим сделать поиск парковки максимально простым
            </div>
            <a class="footer__link" href="https://github.com/Sa888nO"> </a>
        </div>
    </div>
</body>
</html>