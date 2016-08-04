<?php

$homepage = "http://localhost/rama/";

$servername = "localhost";
$username = "root";
$password = "";
$database = "rama";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>