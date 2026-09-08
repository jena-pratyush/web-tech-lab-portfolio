<?php
session_start();
if (!isset($_SESSION["company_user"]) || $_SESSION["company_user"]["role"] !== "admin") {
    header("Location: login.php");
    exit;
}
require_once "../../includes/db.php";
$employees = mysqli_query($conn, "SELECT name, email, created_at FROM ex07_users WHERE role = 'employee' ORDER BY id DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="../../assets/css/style.css">
</head>
<body>
  <main class="content-page">
    <section class="table-panel">
      <a class="back-link" href="index.php">Company Home</a>
      <h1>Employee Details</h1>
      <p class="muted-text">Admin login is authenticated. Below are all employee details.</p>
      <div class="responsive-table">
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Created</th></tr></thead>
          <tbody>
            <?php while ($employee = mysqli_fetch_assoc($employees)): ?>
              <tr>
                <td><?php echo htmlspecialchars($employee["name"]); ?></td>
                <td><?php echo htmlspecialchars($employee["email"]); ?></td>
                <td><?php echo htmlspecialchars($employee["created_at"]); ?></td>
              </tr>
            <?php endwhile; ?>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</body>
</html>
