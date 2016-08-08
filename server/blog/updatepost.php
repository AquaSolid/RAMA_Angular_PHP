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

            /* create a prepared statement */
            if ($sql = $conn->prepare("UPDATE `posts` SET Title = ?, Content = ?, DateSubmited = CURRENT_TIMESTAMP, Slug = ? WHERE ID= ?")) {
                
                /* bind parameters for markers */
                $sql->bind_param("sssi", $Title, $Content, $Slug, $ID);
                
                /* execute query */
                $sql->execute();

                /* close statement */
                $sql->close();
            }

            if ($Slug) {
                echo json_encode($Slug);
            }

            mysqli_close($conn);
        }
    }
} else {
    echo "<p>Please enter a search query</p>";
}

?>