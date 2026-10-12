<?php

session_start();

if (!isset($_SESSION['admin_id'])) {
    echo "Unauthorized.";
    exit;
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? 'http://localhost:3000';
header("Access-Control-Allow-Origin: " . (preg_match('/^http:\/\/localhost(:\d+)?$/', $origin) ? $origin : 'http://localhost:3000'));
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $title = $_POST['title'] ?? '';
    $content = $_POST['content'] ?? '';
    $image = $_FILES['image'] ?? null;

    if ($title === '' || $content === '') {
        echo "Title and content are required.";
        exit;
    }

    if (!$image) {
        echo "No image was selected.";
        exit;
    }

    if ($image['error'] !== UPLOAD_ERR_OK) {
        echo "Image upload error: " . $image['error'];
        exit;
    }

    // Maximum image size: 5 MB
    $maxFileSize = 5 * 1024 * 1024;

    if ($image['size'] > $maxFileSize) {
        echo "Image is too large. Please select an image smaller than 5 MB.";
        exit;
    }

    // Check that the uploaded file is actually an image
    $imageInfo = getimagesize($image['tmp_name']);

    if ($imageInfo === false) {
        echo "The selected file is not a valid image.";
        exit;
    }

    // Allow only specific image types
    $allowedTypes = [
        IMAGETYPE_JPEG,
        IMAGETYPE_PNG,
        IMAGETYPE_WEBP
    ];

    if (!in_array($imageInfo[2], $allowedTypes)) {
        echo "Only JPG, PNG, and WebP images are allowed.";
        exit;
    }

    $uploadDirectory = "../frontend/public/uploads/updates/";

    if (!is_dir($uploadDirectory)) {
        echo "Upload folder does not exist.";
        exit;
    }

    // Get the original filename
    $originalName = basename($image['name']);

    // Get the file extension
    $extension = strtolower(
        pathinfo($originalName, PATHINFO_EXTENSION)
    );

    // Create a unique filename
    $uniqueName = uniqid() . "." . $extension;

    $imagePath = $uploadDirectory . $uniqueName;

    if (!move_uploaded_file($image['tmp_name'], $imagePath)) {
        echo "Image upload failed.";
        exit;
    }

    $stmt = $conn->prepare(
        "INSERT INTO updates (title, content, image)
         VALUES (?, ?, ?)"
    );

    $stmt->bind_param(
        "sss",
        $title,
        $content,
        $uniqueName
    );

    if ($stmt->execute()) {
        echo "Update created successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();

} else {
    echo "Invalid request.";
}

?>