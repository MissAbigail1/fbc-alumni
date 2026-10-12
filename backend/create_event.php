

<?php

session_start();

$origin = $_SERVER['HTTP_ORIGIN'] ?? 'http://localhost:3000';
header("Access-Control-Allow-Origin: " . (preg_match('/^http:\/\/localhost(:\d+)?$/', $origin) ? $origin : 'http://localhost:3000'));
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed."
    ]);
    exit;
}

if (!isset($_SESSION["admin_id"])) {
    http_response_code(401);
    echo json_encode([
        "success" => false,
        "message" => "You must be logged in as an administrator."
    ]);
    exit;
}

require_once "db.php";
require_once "upload_event_image.php";

$title = trim($_POST["title"] ?? "");
$description = trim($_POST["description"] ?? "");
$eventDate = trim($_POST["event_date"] ?? "");
$eventTime = trim($_POST["event_time"] ?? "TBC");
$location = trim($_POST["location"] ?? "");
$image = trim($_POST["existing_image"] ?? "/images/fbc-building.jpg");

if ($title === "" || $eventDate === "" || $location === "") {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Title, event date, and location are required."
    ]);
    $conn->close();
    exit;
}

// Upload the selected image, if one was provided.
$uploadResult = uploadEventImage(
    $_FILES["image"] ?? null,
    $image
);

if (!$uploadResult["success"]) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => $uploadResult["message"]
    ]);
    $conn->close();
    exit;
}

$image = $uploadResult["image"];

$sql = "INSERT INTO events
        (title, description, event_date, event_time, location, image)
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Could not prepare the event."
    ]);
    $conn->close();
    exit;
}

$stmt->bind_param(
    "ssssss",
    $title,
    $description,
    $eventDate,
    $eventTime,
    $location,
    $image
);

if ($stmt->execute()) {
    http_response_code(201);
    echo json_encode([
        "success" => true,
        "message" => "Event created successfully.",
        "id" => $conn->insert_id,
        "image" => $image
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to create event."
    ]);
}

$stmt->close();
$conn->close();
?>