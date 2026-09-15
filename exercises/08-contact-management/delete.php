<?php
require_once "../../includes/db.php";
$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);
if ($id) {
    $stmt = mysqli_prepare($conn, "DELETE FROM contacts WHERE id = ?");
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
}
header("Location: index.php");
exit;
?>
