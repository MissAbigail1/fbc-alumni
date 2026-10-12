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

    $id = $_POST['id'] ?? '';
    $title = $_POST['title'] ?? '';
    $content = $_POST['content'] ?? '';
    $image = $_FILES['image'] ?? null;

    // Check required fields
    if ($id === '' || $title === '' || $content === '') {
        echo "All fields are required.";
        exit;
    }

    // Get the current image
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

    $currentUpdate = $result->fetch_assoc();

    $currentImage = $currentUpdate['image'];

    $stmt->close();

    // Keep the current image unless a new image was uploaded
    $newImageName = $currentImage;

    // If a new image was uploaded
    if ($image && $image['error'] === UPLOAD_ERR_OK) {

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
        $newImageName = uniqid() . "." . $extension;

        $imagePath = $uploadDirectory . $newImageName;

        if (!move_uploaded_file($image['tmp_name'], $imagePath)) {
            echo "Image upload failed.";
            exit;
        }
    }

    // Update the database
    $stmt = $conn->prepare(
        "UPDATE updates
         SET title = ?, content = ?, image = ?
         WHERE id = ?"
    );

    $stmt->bind_param(
        "sssi",
        $title,
        $content,
        $newImageName,
        $id
    );

    if ($stmt->execute()) {

        // Delete the old image if a new image was uploaded
        if (
            $image &&
            $image['error'] === UPLOAD_ERR_OK &&
            !empty($currentImage) &&
            $currentImage !== $newImageName
        ) {

            $oldImagePath =
                "../frontend/public/uploads/updates/" .
                basename($currentImage);

            if (file_exists($oldImagePath)) {
                unlink($oldImagePath);
            }
        }

        echo "Update updated successfully!";

    } else {

        echo "Error: " . $stmt->error;
    }

    $stmt->close();

} else {

    echo "Invalid request.";
}

?>