<?php

/*Grabing the data*/
$FirstName = $_POST['FirstName'];
$LastName  = $_POST['LastName'];
$UserName  = $_POST['UserName'];
$Email     = $_POST['Email'];
$Password  = $_POST['Password'];

/*Connecting to the database*/
$conn = mysqli_connect('localhost', 'root', '', 'rama') or die('Cannot connect.');

/*Check connection*/
if ($conn->connect_error) {
    die('Connect Error (' . $conn->connect_errno . ') ' . $conn->connect_error);
}

/*Writing the SQL*/
$sql = "INSERT INTO `users` (`ID`, `UserName`, `FirstName`, `LastName`, `Email`, `Password`, `UserRole`, `SignUpDate`) VALUES (NULL, '" . $UserName . "', '" . $FirstName . "', '" . $LastName . "', '" . $Email . "', '" . $Password . "', '0', CURRENT_TIMESTAMP);";

/*Executing the SQL*/
$result = mysqli_query($conn, $sql);

/*Checking the execution*/
if (!$result) {
    http_response_code(404);
    die(mysqli_error($conn));
}

/*Closing the connection*/
mysqli_close($conn);
?>