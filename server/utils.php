<?php

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function slugify($text)
{
    // replace non letter or digits by -
    $text = preg_replace('~[^\pL\d]+~u', '-', $text);
    
    // transliterate
    $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
    
    // remove unwanted characters
    $text = preg_replace('~[^-\w]+~', '', $text);
    
    // trim
    $text = trim($text, '-');
    
    // remove duplicate -
    $text = preg_replace('~-+~', '-', $text);
    
    // lowercase
    $text = strtolower($text);
    
    if (empty($text)) {
        return 'n-a';
    }
    
    return $text;
}

function redirect($url, $statusCode = 303)
{
   header('Location: ' . $url, true, $statusCode);
   die();
}
?>