<?php
require_once "../../includes/db.php";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $stmt = mysqli_prepare($conn, "INSERT INTO contacts (name, email, phone, address) VALUES (?, ?, ?, ?)");
    mysqli_stmt_bind_param($stmt, "ssss", $_POST["name"], $_POST["email"], $_POST["phone"], $_POST["address"]);
    mysqli_stmt_execute($stmt);
    header("Location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Add Contact</title><link rel="stylesheet" href="../../assets/css/style.css"></head>
<body><main class="auth-page"><section class="form-panel"><a class="back-link" href="index.php">Contact List</a><h1>Add Contact</h1><form method="post"><label>Name <input type="text" name="name" required></label><label>Email <input type="email" name="email" required></label><label>Phone <input type="text" name="phone" required></label><label>Address <textarea name="address" required></textarea></label><button class="cart-button" type="submit">Save Contact</button></form></section></main></body>
</html>
