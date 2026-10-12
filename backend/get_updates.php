<?php

$origin = $_SERVER['HTTP_ORIGIN'] ?? 'http://localhost:3000';
header("Access-Control-Allow-Origin: " . (preg_match('/^http:\/\/localhost(:\d+)?$/', $origin) ? $origin : 'http://localhost:3000'));
header("Content-Type: application/json");

require "db.php";

$sql = "SELECT * FROM updates ORDER BY id DESC";

$result = $conn->query($sql);

$updates = [];

while ($row = $result->fetch_assoc()) {
    $updates[] = $row;
}

echo json_encode($updates);

?>