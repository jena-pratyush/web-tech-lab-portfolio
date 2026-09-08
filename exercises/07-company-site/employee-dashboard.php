<?php
session_start();
if (!isset($_SESSION["company_user"]) || $_SESSION["company_user"]["role"] !== "employee") {
    header("Location: login.php");
    exit;
}
require_once "../../includes/db.php";
$admins = mysqli_query($conn, "SELECT name, email, created_at FROM users WHERE role = 'admin' ORDER BY id DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employee Dashboard</title>
  <link rel="stylesheet" href="../../assets/css/style.css">
</head>
<body>
  <main class="content-page">
    <section class="table-panel">
      <a class="back-link" href="index.php">Company Home</a>
      <h1>Admin Details</h1>
      <p class="muted-text">Employee login is authenticated. Below are all admin details.</p>
      <div class="responsive-table">
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Created</th></tr></thead>
          <tbody>
            <?php while ($admin = mysqli_fetch_assoc($admins)): ?>
              <tr>
                <td><?php echo htmlspecialchars($admin["name"]); ?></td>
                <td><?php echo htmlspecialchars($admin["email"]); ?></td>
                <td><?php echo htmlspecialchars($admin["created_at"]); ?></td>
              </tr>
            <?php endwhile; ?>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</body>
</html>
