<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (null !== file_get_contents('php://input')) {
        if (!empty(file_get_contents("php://input"))) {

            require_once '../connection.php';            
            require_once '../utils.php';
            
            /*Grabing the data*/
            $ID = test_input(json_decode(file_get_contents('php://input'), true)['ID']);
            $Title   = test_input(json_decode(file_get_contents('php://input'), true)['Title']);
            $Content = test_input(json_decode(file_get_contents('php://input'), true)['Content']);
            $Slug    = slugify($Title);
            
            /*Writing the SQL*/
            $sql = "
            UPDATE `posts` SET 
            Title = '" . mysqli_real_escape_string($conn, $Title) . "', 
            Content = '" . mysqli_real_escape_string($conn, $Content) . "', 
            DateSubmited = CURRENT_TIMESTAMP, 
            Slug = '" . $Slug . "'
            WHERE ID= '" . $ID . "'";

            $result = mysqli_query($conn, $sql);
            
            if (!$result) {
                http_response_code(404);
                die(mysqli_error($conn));
            }
            
            foreach ($result as $row) {
                $rows[] = $row;
            }
            mysqli_free_result($result);
            
            if (!empty($rows)) {
                echo json_encode(array(
                    'Update' => $rows
                ));
            } else {
                echo "No Results";
            }
            
            mysqli_close($conn);
        }
    }
} else {
    echo "<p>Please enter a search query</p>";
}

?>