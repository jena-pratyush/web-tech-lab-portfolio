<?php
require_once "../../includes/db.php";
$contacts = mysqli_query($conn, "SELECT * FROM contacts ORDER BY id DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercise 08 - Contact Management</title>
  <link rel="stylesheet" href="../../assets/css/style.css">
</head>
<body>
  <header class="app-header">
    <nav class="resume-nav">
      <a class="back-link" href="../../index.html">Back to portfolio</a>
      <span>Exercise 08</span>
    </nav>
    <section class="app-hero">
      <div>
        <p class="eyebrow">PHP CRUD</p>
        <h1>Contact Management</h1>
        <p>Add, view, edit, and delete contact entries using PHP and MySQL.</p>
      </div>
      <a class="primary-button" href="add.php">Add Contact</a>
    </section>
  </header>

  <main class="content-page">
    <section class="table-panel">
      <h2>Contact List</h2>
      <div class="responsive-table">
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Address</th><th>Action</th></tr></thead>
          <tbody>
            <?php while ($contact = mysqli_fetch_assoc($contacts)): ?>
              <tr>
                <td><?php echo htmlspecialchars($contact["name"]); ?></td>
                <td><?php echo htmlspecialchars($contact["email"]); ?></td>
                <td><?php echo htmlspecialchars($contact["phone"]); ?></td>
                <td><?php echo htmlspecialchars($contact["address"]); ?></td>
                <td class="table-actions">
                  <a href="view.php?id=<?php echo $contact["id"]; ?>">View</a>
                  <a href="edit.php?id=<?php echo $contact["id"]; ?>">Edit</a>
                  <a href="delete.php?id=<?php echo $contact["id"]; ?>" onclick="return confirm('Delete this contact?')">Delete</a>
                </td>
              </tr>
            <?php endwhile; ?>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</body>
</html>
