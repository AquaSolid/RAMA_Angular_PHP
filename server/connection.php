<?php

$homepage = "http://localhost/rama/";

$servername = "localhost";
$username = "root";
$password = "";
$database = "rama";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

/*
	Options
	--------

	mysqli_real_escape_string($conn, $Title)
*/

?>
