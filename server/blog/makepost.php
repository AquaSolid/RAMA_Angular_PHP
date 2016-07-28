<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['Title']) && isset($_POST['Content']) && isset($_POST['UserID'])) {
        if (!empty($_POST['Title']) && !empty($_POST['Content']) && !empty($_POST['UserID'])) {
            
            require_once '../connection.php';
            require_once '../utils.php';
            
            /*Grabing the data*/
            $Title   = test_input($_POST['Title']);
            $Content = test_input($_POST['Content']);
            $UserID  = test_input($_POST['UserID']);
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
            
            redirect('http://localhost/rama/');
        }
    }
}
?>