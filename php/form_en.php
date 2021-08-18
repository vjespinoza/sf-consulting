<?php

include "connect.php";

// Get values from inputs && trim + escape single quote
$en_name = htmlspecialchars(str_ireplace("'", "''",trim($_POST['en_name'])));
$en_email = htmlspecialchars(trim($_POST['en_email']));
$en_subject = htmlspecialchars(str_ireplace("'", "''",trim($_POST['en_subject'])));
$en_message = htmlspecialchars(str_ireplace("'", "''",trim($_POST['en_message'])));

//Perform POST query to DB
$query = "INSERT INTO form_en VALUES ('$en_name', '$en_email', '$en_subject', '$en_message' )";

if(mysqli_query($conn, $query)){
    include "mailer_en.php";
    echo "Success";
} else{
    echo "ERROR: Hush! Sorry $query. "
    . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
header('Location: ' . $_SERVER['HTTP_REFERER']);

?>