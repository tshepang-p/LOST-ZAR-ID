<?php
$servername = "sql8.freesqldatabase.com";
$username = "sql8795261";
$password = "Lr9EPt4WFY";
$dbname = "sql8795261";
$port = 3306;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname,$port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "";
?>