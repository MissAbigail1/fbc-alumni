

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

$id = filter_var($_POST["id"] ?? null, FILTER_VALIDATE_INT);
$title = trim($_POST["title"] ?? "");
$description = trim($_POST["description"] ?? "");
$eventDate = trim($_POST["event_date"] ?? "");
$eventTime = trim($_POST["event_time"] ?? "TBC");
$location = trim($_POST["location"] ?? "");
$image = trim($_POST["existing_image"] ?? "");

if (!$id || $id < 1) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "A valid event ID is required."
    ]);
    $conn->close();
    exit;
}

if ($title === "" || $eventDate === "" || $location === "") {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Title, event date, and location are required."
    ]);
    $conn->close();
    exit;
}

// Get the current image path from the database.
$currentStmt = $conn->prepare(
    "SELECT image FROM events WHERE id = ?"
);

if (!$currentStmt) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Could not retrieve the existing event."
    ]);
    $conn->close();
    exit;
}

$currentStmt->bind_param("i", $id);
$currentStmt->execute();
$currentStmt->bind_result($currentImage);

if (!$currentStmt->fetch()) {
    $currentStmt->close();
    $conn->close();

    http_response_code(404);
    echo json_encode([
        "success" => false,
        "message" => "Event not found."
    ]);
    exit;
}

$currentStmt->close();

// Keep the database image unless a new image is uploaded.
$image = $currentImage ?: "/images/fbc-building.jpg";

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

$sql = "UPDATE events
        SET title = ?,
            description = ?,
            event_date = ?,
            event_time = ?,
            location = ?,
            image = ?
        WHERE id = ?";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Could not prepare the event update."
    ]);
    $conn->close();
    exit;
}

$stmt->bind_param(
    "ssssssi",
    $title,
    $description,
    $eventDate,
    $eventTime,
    $location,
    $image,
    $id
);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Event updated successfully.",
        "image" => $image
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Failed to update the event."
    ]);
}

$stmt->close();
$conn->close();
?>