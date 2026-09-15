<?php
require_once "../../includes/db.php";
$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);
if (!$id) {
    header("Location: index.php");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $stmt = mysqli_prepare($conn, "UPDATE contacts SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?");
    mysqli_stmt_bind_param($stmt, "ssssi", $_POST["name"], $_POST["email"], $_POST["phone"], $_POST["address"], $id);
    mysqli_stmt_execute($stmt);
    header("Location: index.php");
    exit;
}
$stmt = mysqli_prepare($conn, "SELECT * FROM contacts WHERE id = ?");
mysqli_stmt_bind_param($stmt, "i", $id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$contact = mysqli_fetch_assoc($result);
if (!$contact) {
    header("Location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Edit Contact</title><link rel="stylesheet" href="../../assets/css/style.css"></head>
<body><main class="auth-page"><section class="form-panel"><a class="back-link" href="index.php">Contact List</a><h1>Edit Contact</h1><form method="post"><label>Name <input type="text" name="name" value="<?php echo htmlspecialchars($contact["name"]); ?>" required></label><label>Email <input type="email" name="email" value="<?php echo htmlspecialchars($contact["email"]); ?>" required></label><label>Phone <input type="text" name="phone" value="<?php echo htmlspecialchars($contact["phone"]); ?>" required></label><label>Address <textarea name="address" required><?php echo htmlspecialchars($contact["address"]); ?></textarea></label><button class="cart-button" type="submit">Update Contact</button></form></section></main></body>
</html>
