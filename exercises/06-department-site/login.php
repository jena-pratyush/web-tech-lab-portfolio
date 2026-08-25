<?php
session_start();
$message = "";
require_once "../../includes/db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST["email"]);
    $password = $_POST["password"];

    $stmt = mysqli_prepare($conn, "SELECT id, name, password, role FROM users WHERE email = ? AND role = 'student'");
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    $user = mysqli_fetch_assoc($result);

    if ($user && password_verify($password, $user["password"])) {
        $_SESSION["department_user"] = $user;
        header("Location: dashboard.php");
        exit;
    }

    $message = "Invalid student login details.";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Department Login</title>
  <link rel="stylesheet" href="../../assets/css/style.css">
</head>
<body>
  <main class="auth-page">
    <section class="form-panel">
      <a class="back-link" href="index.php">Department Home</a>
      <h1>Student Login</h1>
      <?php if ($message): ?><p class="status-message warning-text"><?php echo htmlspecialchars($message); ?></p><?php endif; ?>
      <form method="post">
        <label>Email <input type="email" name="email" required></label>
        <label>Password <input type="password" name="password" required></label>
        <button class="cart-button" type="submit">Login</button>
      </form>
    </section>
  </main>
</body>
</html>
