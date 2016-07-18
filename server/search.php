<?php

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['q'])) {
        if (preg_match("/^[A-Za-z]+/", $_GET['q'])) {
            $name = $_GET['q'];

            $con = mysqli_connect('localhost', 'root', '') or die('Cannot connect.');
            $db  = mysqli_select_db($con, 'blog');
            $sql = "SELECT id, name, email FROM people WHERE name LIKE '%" . $name . "%' OR email LIKE '%" . $name . "%'";
            $result = mysqli_query($con, $sql);
            
            if (!$result) {
                http_response_code(404);
                die(mysqli_error($con));
            }
            
            /*foreach ($result as $row) { //while ($row = mysqli_fetch_array($result))
            $name = $row['name'];
            $email = $row['email'];
            $id    = $row['id'];
            //-display the result of the array 
            echo "<ul>\n";
            echo "<li>" . "<a  href=\"search.php?id=$id\">" . $name . " - " . $email . "</a></li>\n";
            echo "</ul>";
            }*/
            
            foreach ($result as $row) {
                $rows[] = $row;
            }
            $result->free();

            if (!empty($rows)) {
                $data = json_encode(
                    //array('People' => $rows)
                    $rows
                );
                echo $data;
            } else {
                echo "No Results";
            }
            
            mysqli_close($con);
        }
    }
} else {
    echo "<p>Please enter a search query</p>";
}

?>