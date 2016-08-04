<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (null !== file_get_contents('php://input')) {
        if (!empty(file_get_contents("php://input"))) {
            
            require_once '../connection.php';
            require_once '../utils.php';
            
            /*Grabing the data*/
            $Title   = test_input(json_decode(file_get_contents('php://input'), true)['Title']);
            $Content = test_input(json_decode(file_get_contents('php://input'), true)['Content']);
            $UserID = test_input(json_decode(file_get_contents('php://input'), true)['UserID']);
            $Slug    = slugify($Title);
            

            /*Writing the SQL*/
            $sql = "INSERT INTO `posts` (`ID`, `Title`, `Content`, `UserID`, `DateSubmited`, `Slug`) VALUES (NULL, '" . mysqli_real_escape_string($conn, $Title) . "', '" . mysqli_real_escape_string($conn, $Content) . "', '" . $UserID . "', CURRENT_TIMESTAMP, '" . $Slug . "');";
            
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