<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (null !== file_get_contents('php://input')) {
        if (!empty(file_get_contents("php://input"))) {
            
require_once 'utils.php';
            
    /*Grabing the data*/
$YourEmail = test_input(json_decode(file_get_contents('php://input'), true)['YourEmail']);
$YourMessage = test_input(json_decode(file_get_contents('php://input'), true)['YourMessage']);
$YourUserName = test_input(json_decode(file_get_contents('php://input'), true)['YourUserName']);

$to = "filip.markoski45@gmail.com";
$subject = "[RAMA] " . $YourUserName . " - Contact E-mail";
$txt = $YourMessage;
$headers = "From: " . $YourEmail;

mail($to,$subject,$txt,$headers);

        }
    }
}

?>