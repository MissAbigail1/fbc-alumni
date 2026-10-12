<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    if ($name === '' || $email === '' || $subject === '' || $message === '') {
        echo "Please fill in all fields.";
        exit;
    }

    $stmt = $conn->prepare(
    "INSERT INTO enquiries (full_name, email, subject, message)
     VALUES (?, ?, ?, ?)"
);

$stmt->bind_param("ssss", $name, $email, $subject, $message);

if ($stmt->execute()) {
    echo "Enquiry submitted successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();

} else {
    echo "Invalid request.";
}

?>