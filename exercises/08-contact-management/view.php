<?php
require_once "../../includes/db.php";
$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);
if (!$id) {
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
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>View Contact</title><link rel="stylesheet" href="../../assets/css/style.css"></head>
<body><main class="content-page"><section class="form-panel wide-panel"><a class="back-link" href="index.php">Contact List</a><p class="eyebrow">Contact Details</p><h1><?php echo htmlspecialchars($contact["name"]); ?></h1><div class="dashboard-list"><span>Email: <?php echo htmlspecialchars($contact["email"]); ?></span><span>Phone: <?php echo htmlspecialchars($contact["phone"]); ?></span><span>Address: <?php echo htmlspecialchars($contact["address"]); ?></span></div></section></main></body>
</html>
