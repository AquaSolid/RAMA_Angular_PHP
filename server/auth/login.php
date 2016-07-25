<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['UserName']) && isset($_GET['Password'])) {
        if (!empty($_GET['UserName']) && !empty($_GET['Password'])) {

            require_once '../dbconnect.php';

        	/*Grabing the data*/
            $login_name = $_GET['UserName'];
            $password   = $_GET['Password'];
            
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
                $data = json_encode(
                array('Users' => $rows)
                //   $rows);
                );
                //echo $data;
            } else {
                echo "No Results";
            }

            $data = json_decode($data, true);

            /*Starting the Session*/
            if (!isset($_SESSION)){
                session_start();
            }

            /*Applying the data to the Session's Variables*/
            $_SESSION["ID"] = $data['Users'][0]['ID'];
            $_SESSION["UserName"] = $data['Users'][0]['UserName'];
            $_SESSION["FirstName"] = $data['Users'][0]['FirstName'];
            $_SESSION["LastName"] = $data['Users'][0]['LastName'];
            $_SESSION["Email"] = $data['Users'][0]['Email'];

            print_r($_SESSION); echo "<br>"; echo $_SESSION["Email"];

            // Closing MySQL Connection
            mysqli_close($conn);
        }
    }
}

?>