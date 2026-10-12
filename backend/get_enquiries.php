<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require "db.php";

$sql = "SELECT * FROM enquiries ORDER BY id DESC";

$result = $conn->query($sql);

$enquiries = [];

while ($row = $result->fetch_assoc()) {
    $enquiries[] = $row;
}

echo json_encode($enquiries);

?>