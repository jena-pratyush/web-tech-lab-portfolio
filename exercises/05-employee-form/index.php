<?php
$message = "";
$employees = [];

require_once "../../includes/db.php";
/** @var mysqli $conn */

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $phone = trim($_POST["phone"]);
    $department = trim($_POST["department"]);

    if ($name && $email && $phone && $department) {
        $stmt = mysqli_prepare(
            $conn,
            "INSERT INTO employees (name, email, phone, department) VALUES (?, ?, ?, ?)"
        );

        if ($stmt) {
            mysqli_stmt_bind_param($stmt, "ssss", $name, $email, $phone, $department);

            if (mysqli_stmt_execute($stmt)) {
                // Redirect so refreshing doesn't resubmit the form
                header("Location: " . $_SERVER["PHP_SELF"] . "?saved=1");
                exit;
            } else {
                $message = "Insert failed: " . mysqli_stmt_error($stmt);
            }
        } else {
            $message = "Database query failed: " . mysqli_error($conn);
        }
    } else {
        $message = "Please fill all fields.";
    }
}

if (isset($_GET["saved"])) {
    $message = "Employee details saved successfully.";
}

// Fetch all employees to display in the table
$result = mysqli_query($conn, "SELECT id, name, email, phone, department FROM employees ORDER BY id DESC");
if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        $employees[] = $row;
    }
} else {
    $message .= " Fetch failed: " . mysqli_error($conn);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercise 05 - Employee Form</title>
  <link rel="stylesheet" href="../../assets/css/style.css">
</head>
<body>
  <header class="app-header">
    <nav class="resume-nav">
      <a class="back-link" href="https://jena-pratyush.github.io/web-tech-lab-portfolio/">Back to portfolio</a>
      <span>Exercise 05</span>
    </nav>
    <section class="app-hero">
      <div>
        <p class="eyebrow">PHP + MySQL</p>
        <h1>Employee Details Form</h1>
        <p>Enter employee details and store them in a MySQL table using phpMyAdmin.</p>
      </div>
    </section>
  </header>

  <main class="crud-page">
    <section class="form-panel">
      <h2>Add Employee</h2>
      <?php if ($message): ?>
        <p class="status-message"><?php echo htmlspecialchars($message); ?></p>
      <?php endif; ?>
      <form method="post">
        <label>Name <input type="text" name="name" required></label>
        <label>Email <input type="email" name="email" required></label>
        <label>Phone <input type="text" name="phone" required></label>
        <label>Department <input type="text" name="department" required></label>
        <button class="cart-button" type="submit">Save Employee</button>
      </form>
    </section>

    <section class="table-panel">
      <h2>All Employees</h2>
      <?php if (empty($employees)): ?>
        <p>No employees found.</p>
      <?php else: ?>
        <div class="responsive-table">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($employees as $emp): ?>
                <tr>
                  <td><?php echo htmlspecialchars($emp["id"]); ?></td>
                  <td><?php echo htmlspecialchars($emp["name"]); ?></td>
                  <td><?php echo htmlspecialchars($emp["email"]); ?></td>
                  <td><?php echo htmlspecialchars($emp["phone"]); ?></td>
                  <td><?php echo htmlspecialchars($emp["department"]); ?></td>
                </tr>
              <?php endforeach; ?>
            </tbody>
          </table>
        </div>
      <?php endif; ?>
    </section>
  </main>
</body>
</html>