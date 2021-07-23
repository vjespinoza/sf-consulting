<?php

//Create connection
$host='localhost';
$dbusername='root';
$dbpassword='';
$dbname='contact_form';

$conn = mysqli_connect($host, $dbusername, $dbpassword, $dbname);

// Check connection
if(!$conn) {
    die('ERROR: Connection failed: ' + mysqli_connect_error());
}

// Get values from inputs && trim + escape single quote
$en_name = str_ireplace("'", "''",trim($_POST['en_name']));
$en_email = trim($_POST['en_email']);
$en_subject = str_ireplace("'", "''",trim($_POST['en_subject']));
$en_message = str_ireplace("'", "''",trim($_POST['en_message']));

//Perform POST query to DB
$query = "INSERT INTO form_en VALUES ('$en_name', '$en_email', '$en_subject', '$en_message' )";


if(mysqli_query($conn, $query)){
    // echo "<script type='text/javascript' src='js/alert.js'></script>";
    // echo "<script type='text/javascript'>alert('Hello!')</script>";
    echo "<script>
            Swal.fire({
                title: 'Awesome!',
                text: 'The information was submitted successfully',
                icon: 'success',
            });
        </script>";
} else{
    echo "ERROR: Hush! Sorry $query. "
    . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
header('Location: ' . $_SERVER['HTTP_REFERER']);

?>