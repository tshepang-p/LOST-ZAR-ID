<?php
include 'connection.php';




$id_number = $_POST['id_number'];
$id_name = $_POST['id_name'];
$id_surname = $_POST['id_surname'];
$finder_name = $_POST['finder_name'];
$finder_surname = $_POST['finder_surname'];
$finder_phone_number = $_POST['finder_phone_number'];
$finder_email = $_POST['finder_email']; // Optional field, can be empty

// Insert into database
$sql = "INSERT INTO lost_id (id_number, id_name, id_surname, finder_surname, finder_name, finder_phone_number,finder_email_address) VALUES (?, ?, ?,?,?,?,?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssss", $id_number, $id_name, $id_surname,$finder_surname,$finder_name, $finder_phone_number,$finder_email);

if ($stmt->execute()) {
    echo "Data saved succsessfully.";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>