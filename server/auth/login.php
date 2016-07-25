<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (null !== file_get_contents('php://input')) {
        if (!empty(file_get_contents("php://input"))) {

            require_once '../connection.php';
            require_once '../utils.php';
            
            /*Grabbing the data*/
            $login_name = test_input(json_decode(file_get_contents('php://input'), true)['UserName']);
            $password = test_input(json_decode(file_get_contents('php://input'), true)['Password']);

            $sql = "SELECT * FROM users WHERE 
            (username = '" . $login_name . "' OR email = '" . $login_name . "') 
            AND password = '" . $password . "'";
            
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
                $data = json_encode(array(
                    'Users' => $rows
                )
                //   $rows);
                    );
                //echo $data;
            } else {
                echo "No Results";
            }
            
            $data = json_decode($data, true);
            
            /*Starting the Session*/
            if (!isset($_SESSION)) {
                session_start();
            }
            
            /*Applying the data to the Session's Variables*/
            $_SESSION["ID"]        = $data['Users'][0]['ID'];
            $_SESSION["UserName"]  = $data['Users'][0]['UserName'];
            $_SESSION["FirstName"] = $data['Users'][0]['FirstName'];
            $_SESSION["LastName"]  = $data['Users'][0]['LastName'];
            $_SESSION["Email"]     = $data['Users'][0]['Email'];
            $_SESSION["Logged"]    = true;
            
            header('Content-Type: application/json');
            echo json_encode($_SESSION);
            
            // Closing MySQL Connection
            mysqli_close($conn);
            
        }
    }
}

?>

