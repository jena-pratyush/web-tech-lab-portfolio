<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "lab_portfolio";

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}
?>
