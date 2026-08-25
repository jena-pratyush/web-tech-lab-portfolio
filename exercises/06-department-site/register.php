<?php
$message = "";
require_once "../../includes/db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $role = "student";

    $stmt = mysqli_prepare($conn, "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)");
    mysqli_stmt_bind_param($stmt, "ssss", $name, $email, $password, $role);
    $message = mysqli_stmt_execute($stmt) ? "Registration successful. Please login." : "Registration failed. Email may already exist.";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Department Registration</title>
  <link rel="stylesheet" href="../../assets/css/style.css">
</head>
<body>
  <main class="auth-page">
    <section class="form-panel">
      <a class="back-link" href="index.php">Department Home</a>
      <h1>Student Registration</h1>
      <?php if ($message): ?><p class="status-message"><?php echo htmlspecialchars($message); ?></p><?php endif; ?>
      <form method="post">
        <label>Name <input type="text" name="name" required></label>
        <label>Email <input type="email" name="email" required></label>
        <label>Password <input type="password" name="password" required></label>
        <button class="cart-button" type="submit">Register</button>
      </form>
    </section>
  </main>
</body>
</html>
