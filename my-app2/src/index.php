<?php 

$connect = mysqli_connect("127.0.0.1:3307", "root", "lanAdidas14@", "hair_appointments" );
$query = "insert into admin_logins(firstName, lastName, email, password)" ;

$firstName = $_POST["firstName"];
$lastName = $_POST["lastName"];
$username = $_POST["username"];
$password = $_POST["password"];

$runQuery = mysqli_query($connect, $query);

if ($runQuery) {
    echo "Information successfully logged";
} else {
    echo "Error logging information. Please try again.";
}





?>