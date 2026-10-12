<?php
session_start();

$origin = $_SERVER['HTTP_ORIGIN'] ?? 'http://localhost:3000';
header("Access-Control-Allow-Origin: " . (preg_match('/^http:\/\/localhost(:\d+)?$/', $origin) ? $origin : 'http://localhost:3000'));
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

require "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($username === '' || $password === '') {
        echo "Username and password are required.";
        exit;
    }

    $stmt = $conn->prepare(
        "SELECT * FROM admin_users WHERE username = ?"
    );

    $stmt->bind_param("s", $username);

    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows === 1) {

    $admin = $result->fetch_assoc();

    if (password_verify($password, $admin['password'])) {

        $_SESSION['admin_id'] = $admin['id'];
        $_SESSION['admin_username'] = $admin['username'];

        echo "Login successful!";

    } else {

        echo "Invalid username or password.";

    }

} else {

    echo "Invalid username or password.";

}

$stmt->close();

} else {

    echo "Invalid request.";

}
?>