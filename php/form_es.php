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
$es_name = str_ireplace("'", "''",trim($_POST['es_name']));
$es_email = trim($_POST['es_email']);
$es_subject = str_ireplace("'", "''",trim($_POST['es_subject']));
$es_message = str_ireplace("'", "''",trim($_POST['es_message']));


//Perform POST query to DB
$query = "INSERT INTO form_es VALUES ('$es_name', '$es_email', '$es_subject', '$es_message' )";


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