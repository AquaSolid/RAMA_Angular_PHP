<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['q'])) {
        if (preg_match("/^[A-Za-z]+/", $_GET['q'])) {
            
            $query = $_GET['q'];
            require_once '../connection.php';          
            
            $sql = "
            SELECT posts.Title, posts.Content, posts.DateSubmited, posts.Slug, users.UserName 
            FROM `posts`, `users` 
            WHERE users.ID = posts.UserID
            AND posts.Title LIKE '%" . $query . "%' 
            OR posts.Content LIKE '%" . $query . "%' 
            OR users.UserName LIKE '%" . $query . "%'";
            
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