<?php

include "connect.php";

// Get values from inputs && trim + escape single quote
$es_name = htmlspecialchars(str_ireplace("'", "''",trim($_POST['es_name'])));
$es_email = htmlspecialchars(trim($_POST['es_email']));
$es_subject = htmlspecialchars(str_ireplace("'", "''",trim($_POST['es_subject'])));
$es_message = htmlspecialchars(str_ireplace("'", "''",trim($_POST['es_message'])));

//Perform POST query to DB
$query = "INSERT INTO form_es VALUES ('$es_name', '$es_email', '$es_subject', '$es_message' )";

if(mysqli_query($conn, $query)){
    include "mailer_es.php";
    echo "Success";
} else{
    echo "ERROR: Hush! Sorry $query. "
    . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
header('Location: ' . $_SERVER['HTTP_REFERER']);

?>

