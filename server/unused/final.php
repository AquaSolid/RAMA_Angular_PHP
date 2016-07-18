<?php


$con = mysqli_connect('localhost', 'root', '') or die('Cannot connect.');
$db = mysqli_select_db($con, 'blog');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM " . $table . " " . ($id ? " WHERE id=" . $id : '');
        break;
    case 'PUT':
        $sql = "UPDATE " . $table . " SET $set WHERE id=" . $id;
        break;
    case 'POST':
        $sql = "INSERT INTO " . $table . " SET $set WHERE id=" . $id;
        break;
    case 'DELETE':
        $sql = "DELETE FROM " . $table . " WHERE id=" . $id;
        break;
}


$result = mysqli_query($con, $sql);

if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}

mysqli_close($con);


?>