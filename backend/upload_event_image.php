

<?php

function uploadEventImage($file, $existingImage = "")
{
    // Save event images inside the React frontend's public folder.
    $uploadDirectory = dirname(__DIR__) . "/frontend/public/uploads/events/";

    // Keep the existing image if no new image was selected.
    if (
        !isset($file) ||
        !isset($file["error"]) ||
        $file["error"] === UPLOAD_ERR_NO_FILE
    ) {
        return [
            "success" => true,
            "image" => $existingImage
        ];
    }

    if ($file["error"] !== UPLOAD_ERR_OK) {
        return [
            "success" => false,
            "message" => "The image upload failed. Please try again."
        ];
    }

    if ($file["size"] > 5 * 1024 * 1024) {
        return [
            "success" => false,
            "message" => "The image must be 5 MB or smaller."
        ];
    }

    $imageInfo = @getimagesize($file["tmp_name"]);

    if ($imageInfo === false) {
        return [
            "success" => false,
            "message" => "Please upload a valid image."
        ];
    }

    $allowedTypes = [
        "image/jpeg" => "jpg",
        "image/png" => "png",
        "image/webp" => "webp"
    ];

    $imageMimeType = $imageInfo["mime"] ?? "";

    if (!isset($allowedTypes[$imageMimeType])) {
        return [
            "success" => false,
            "message" => "Only JPG, PNG, and WebP images are allowed."
        ];
    }

    if (
        !is_dir($uploadDirectory) &&
        !mkdir($uploadDirectory, 0755, true)
    ) {
        return [
            "success" => false,
            "message" => "The event image folder could not be created."
        ];
    }

    if (!is_writable($uploadDirectory)) {
        return [
            "success" => false,
            "message" => "The event image folder is not writable."
        ];
    }

    $fileName = bin2hex(random_bytes(16))
        . "."
        . $allowedTypes[$imageMimeType];

    $destination = $uploadDirectory . $fileName;

    if (!move_uploaded_file($file["tmp_name"], $destination)) {
        return [
            "success" => false,
            "message" => "The uploaded image could not be saved."
        ];
    }

    return [
        "success" => true,
        "image" => "/uploads/events/" . $fileName
    ];
}
?>