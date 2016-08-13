<?php 

/*Grabing the data*/
$name = $_POST['name'];
$email = $_POST['email'];

/*Connecting to the database*/
$mysqli = mysqli_connect('localhost', 'root', '', 'blog');

if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}

$sql = "INSERT INTO `blog`.`people` (`id`, `name`, `email`) VALUES (NULL, '$name', '$email')";

$result = mysqli_query($mysqli,$sql);

if (!$result) {
  http_response_code(404);
  die(mysqli_error($mysqli));
}

mysqli_close($mysqli);
?>