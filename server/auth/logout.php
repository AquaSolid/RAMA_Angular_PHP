<?php

header('Content-Type: application/json');
if (isset($_SESSION)) {
    
    // remove all session variables
    session_unset();
    
    // destroy the session 
    session_destroy();

    echo json_encode('You are now logged out.');
} else {
    echo json_encode('You are now logged out..');
}
?>