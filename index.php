<?php
// Redirect to the clean URL if someone accesses index.php directly
if (basename($_SERVER['PHP_SELF']) == 'index.php') {
    header('Location: /', true, 301);
    exit();
}

// Include your original index.html content
include('index.html');
?>