<?php

session_start();

$origin = $_SERVER['HTTP_ORIGIN'] ?? 'http://localhost:3000';
header("Access-Control-Allow-Origin: " . (preg_match('/^http:\/\/localhost(:\d+)?$/', $origin) ? $origin : 'http://localhost:3000'));
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if (isset($_SESSION['admin_id'])) {

    echo json_encode([
        "loggedIn" => true,
        "username" => $_SESSION['admin_username']
    ]);

} else {

    echo json_encode([
        "loggedIn" => false
    ]);

}

?>