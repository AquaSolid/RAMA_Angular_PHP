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
            
            /* create a prepared statement */
            if ($sql = $conn->prepare("INSERT INTO `posts` (`ID`, `Title`, `Content`, `UserID`, `DateSubmited`, `Slug`) VALUES (NULL, ?, ?, ?, CURRENT_TIMESTAMP, ?);")) {
                
                /* bind parameters for markers */
                $sql->bind_param("ssis", $Title, $Content, $UserID, $Slug);
                
                /* execute query */
                $sql->execute();
                
                /* close statement */
                $sql->close();
            }
            
            if ($Slug) {
                echo json_encode($Slug);
            }

            /*Closing the connection*/
            mysqli_close($conn);
        }
    }
}

?>