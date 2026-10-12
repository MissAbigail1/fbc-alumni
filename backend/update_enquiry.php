<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $id = $_POST['id'] ?? '';
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    if (
        $id === '' ||
        $name === '' ||
        $email === '' ||
        $subject === '' ||
        $message === ''
    ) {
        echo "All fields are required.";
        exit;
    }

    $stmt = $conn->prepare(
        "UPDATE enquiries
         SET full_name = ?, email = ?, subject = ?, message = ?
         WHERE id = ?"
    );

    $stmt->bind_param(
        "ssssi",
        $name,
        $email,
        $subject,
        $message,
        $id
    );

    if ($stmt->execute()) {
        echo "Enquiry updated successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();

} else {
    echo "Invalid request.";
}

?>