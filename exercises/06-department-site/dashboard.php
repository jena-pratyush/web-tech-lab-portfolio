<?php
session_start();
if (!isset($_SESSION["department_user"])) {
    header("Location: login.php");
    exit;
}
$user = $_SESSION["department_user"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Department Dashboard</title>
  <link rel="stylesheet" href="../../assets/css/style.css">
</head>
<body>
  <main class="content-page">
    <section class="form-panel wide-panel">
      <a class="back-link" href="index.php">Department Home</a>
      <p class="eyebrow">Dashboard</p>
      <h1>Welcome, <?php echo htmlspecialchars($user["name"]); ?></h1>
      <p>You are authenticated as a department student user.</p>
      <div class="dashboard-list">
        <span>Web Technologies Lab</span>
        <span>Database Systems</span>
        <span>Software Engineering</span>
      </div>
    </section>
  </main>
</body>
</html>
