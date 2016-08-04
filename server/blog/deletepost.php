<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (null !== file_get_contents('php://input')) {
        if (!empty(file_get_contents("php://input"))) {
            
            require_once '../connection.php';
            require_once '../utils.php';
            
            /*Grabing the data*/
            $ID = test_input(json_decode(file_get_contents('php://input'), true)['ID']);
            $Slug   = test_input(json_decode(file_get_contents('php://input'), true)['Slug']);
            
            $sql = "DELETE FROM `posts` 
            WHERE ID='" . $ID . "' 
            AND Slug='" . $Slug . "'";

            $result = mysqli_query($conn, $sql);
            
            if (!$result) {
                http_response_code(404);
                die(mysqli_error($conn));
            }

            mysqli_close($conn);
        }
    }
}

?>