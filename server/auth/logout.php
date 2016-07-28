<?php

if (isset($_COOKIE["PHPSESSID"])) {
    if (isset($_SESSION["Logged"])) {
        if ($_SESSION["Logged"] == true) {
            // remove all session variables
            session_unset();
            
            // destroy the session 
            session_destroy();
        }
    }
}
?>