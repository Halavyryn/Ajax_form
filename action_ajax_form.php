<?php
/*Checking data for emptiness on server*/
if (isset($_POST["name"]) && isset($_POST["phonenumber"]) && isset($_POST["nationality"])) {

    // Формируем массив для JSON ответа
    $result = array(
        'name' => $_POST["name"],
        'phonenumber' => $_POST["phonenumber"],
       'nationality' => $_POST["nationality"],
    );

    // Converting an array to JSON
    echo json_encode($result);
}