<?php
//if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    if (isset($_GET['q'])) {
        $conn = mysqli_connect('localhost', 'root', '') or die('Cannot connect.');
        $db = mysqli_select_db($conn, 'blog');
        
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        
        $q = $_GET['q'];
        echo $q;

        // sql to delete a record
        $sql = "DELETE FROM people WHERE id=" . $q;
        
        if ($conn->query($sql) === TRUE) {
            echo "Record deleted successfully";
        } else {
            echo "Error deleting record: " . $conn->error;
        }
        
        $conn->close();
    }
//}
?>