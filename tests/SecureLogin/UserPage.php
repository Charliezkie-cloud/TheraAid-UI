<?php

session_start();

$hash = '$2y$10$lWr5hTalgBdKBDsZTuuoG.87hjgKJ8S0fUbJ/0rxMZgybVfMig7ZK';

if (isset($_SESSION["password"])) {
    $password = $_SESSION["password"];

    if (password_verify($password, $hash)) {
        echo "Successfully logged in! <br>";
        echo "<br>";
        echo "<b>Password: $password</b>";
    } else {
        echo "Invalid password, please try again.";
    }  
} else {
    echo "This page is only for user.";
}

?>