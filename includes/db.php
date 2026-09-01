<?php
$host = "127.0.0.1";
$username = "root";
$password = "root";
$database = "employee_details_db";

mysqli_report(MYSQLI_REPORT_OFF);

// Fallback across common MySQL ports (MAMP 8889, Default 3306)
$ports = [8889, 3306];
$conn = null;

foreach ($ports as $p) {
    $test_conn = @mysqli_connect($host, $username, $password, "", $p);
    if ($test_conn) {
        $conn = $test_conn;
        break;
    }
}

if (!$conn) {
    die("<div style='font-family: system-ui, sans-serif; padding: 24px; background: #fee2e2; color: #991b1b; border: 1px solid #f87171; border-radius: 8px; max-width: 600px; margin: 40px auto;'>"
        . "<h2 style='margin-top:0;'>Database Connection Failed</h2>"
        . "<p>Unable to connect to MySQL server on port 8889 or 3306 with credentials <code>root:root</code>.</p>"
        . "<p>Please ensure MAMP / MySQL server is started and running on your system.</p>"
        . "</div>");
}

// Ensure database and table exist
mysqli_query($conn, "CREATE DATABASE IF NOT EXISTS `employee_details_db`");
mysqli_select_db($conn, $database);

mysqli_query($conn, "CREATE TABLE IF NOT EXISTS `employees` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `department` VARCHAR(100) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");
// This will be used when uploading infinityfree hosting

/*
$host = "sql311.infinityfree.com";
$username = "if0_42743936";
$password = "YOUR_DB_PASSWORD_HERE";
$database = "if0_42743936_portfolio";

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    die("Database Connection Failed: " . mysqli_connect_error());
}
*/
?>
