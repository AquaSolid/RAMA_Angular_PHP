<?php

header('Content-Type: application/json');
if (isset($_COOKIE["PHPSESSID"])) {
    if (isset($_SESSION["Logged"])) {
        if ($_SESSION["Logged"] == true) {
            // remove all session variables
            session_unset();
            
            // destroy the session 
            session_destroy();
        }
    }
    echo json_encode('You are now logged out.');
} else {
    echo json_encode('You are now logged out..');
}
?>