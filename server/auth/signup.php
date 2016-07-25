<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['FirstName']) && isset($_POST['LastName']) && isset($_POST['UserName']) && isset($_POST['Email']) && isset($_POST['Password'])) {
        if (!empty($_POST['FirstName']) && !empty($_POST['LastName']) && !empty($_POST['UserName']) && !empty($_POST['Email']) && !empty($_POST['Password'])) {
            
            require_once '../dbconnect.php';
            /*Grabing the data*/
            $FirstName = $_POST['FirstName'];
            $LastName  = $_POST['LastName'];
            $UserName  = $_POST['UserName'];
            $Email     = $_POST['Email'];
            $Password  = $_POST['Password'];
            
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
        }
    }
}
?>