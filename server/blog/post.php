<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['p'])) {
        if (preg_match("/^[A-Za-z]+/", $_GET['p'])) {
            
            $Slug = $_GET['p'];
            
            require_once '../connection.php';
            
            $sql = "SELECT Title, Content, UserID, DateSubmited FROM `posts` WHERE Slug='" . $Slug . "'";
            
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
            $result->free();
            
            if (!empty($rows)) {
                $data = array(
                    'Post' => $rows
                );
            } else {
                echo "No Results";
            }
            
            $UserID = $data['Post'][0]['UserID'];
            
            $sql = "SELECT UserName FROM `users` WHERE ID=" . $UserID;
            
            // excecute SQL statement
            $result = mysqli_query($conn, $sql);
            
            // die if SQL statement failed
            if (!$result) {
                http_response_code(404);
                die(mysqli_error($conn));
            }
            
            if ($result = mysqli_query($conn, $sql)) {
                
                /* fetch associative array */
                while ($row = mysqli_fetch_assoc($result)) {
                    $UserName = $row["UserName"];
                }
                
                /* free result set */
                mysqli_free_result($result);
            }
            
            $data['Post'][0]['UserName'] = $UserName;
            
            echo json_encode($data);
            
            mysqli_close($conn);
        }
    }
}
?>