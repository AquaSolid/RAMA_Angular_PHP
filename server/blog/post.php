<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['p'])) {
        if (preg_match("/^[A-Za-z]+/", $_GET['p'])) {
            
            $Slug = $_GET['p'];
            
            require_once '../connection.php';
            
            $sql = "SELECT posts.ID, posts.Title, posts.Subtitle, posts.Content, posts.DateSubmited, posts.Slug, posts.ImageURL, users.UserName FROM `posts`, `users` WHERE users.ID = posts.UserID AND Slug='" . $Slug . "'";
            
            // excecute SQL statement
            $result = mysqli_query($conn, $sql);
            
            // die if SQL statement failed
            if (!$result) {
                http_response_code(404);
                die(mysqli_error($conn));
            }
            
            // gather the result and encode it to JSON
            foreach ($result as $row) {
                $rows[] = $row;
            }
            // free result set
            mysqli_free_result($result);
            
            if (!empty($rows)) {
                echo json_encode(array(
                    'Post' => $rows
                ));
            } else {
                echo "No Results";
            }
            
            mysqli_close($conn);
        }
    }
}

?>