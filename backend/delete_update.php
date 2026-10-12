<?php
session_start();

if (!isset($_SESSION['admin_id'])) {
    echo "Unauthorized.";
    exit;
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? 'http://localhost:3000';
header("Access-Control-Allow-Origin: " . (preg_match('/^http:\/\/localhost(:\d+)?$/', $origin) ? $origin : 'http://localhost:3000'));
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
require "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $id = $_POST['id'] ?? '';

    if ($id === '') {
        echo "ID is required.";
        exit;
    }

    // First, find the image belonging to this update
    $stmt = $conn->prepare(
        "SELECT image FROM updates WHERE id = ?"
    );

    $stmt->bind_param("i", $id);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        echo "Update not found.";
        exit;
    }

    $update = $result->fetch_assoc();

    $imageName = $update['image'];

    $stmt->close();


    // Delete the update from the database
    $stmt = $conn->prepare(
        "DELETE FROM updates WHERE id = ?"
    );

    $stmt->bind_param("i", $id);

    if (!$stmt->execute()) {
        echo "Error: " . $stmt->error;
        exit;
    }

    $stmt->close();


    // Delete the image file
    if (!empty($imageName)) {

        $imagePath = "../frontend/public/uploads/updates/" . basename($imageName);

        if (file_exists($imagePath)) {
            unlink($imagePath);
        }
    }

    echo "Update deleted successfully!";

} else {

    echo "Invalid request.";

}

?>