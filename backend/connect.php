<?php
    // Retrieve POST data

    $data = json_decode(file_get_contents('php://input'), true);

    // Extract data
    $firstName = $data['firstName'];
    $lastName = $data['lastName'];
    $number = $data['number'];
    $email = $data['email'];
    $hairstyle = $data['hairstyle'];
    $appType = $data['appType'];
    $price = $data['price'];
    $appDate = $data['app_date'];
    $appTime = $data['app_time'];
    $dbPassword = $data['dbPassowrd'];

    // Connect to the database
    $conn = mysqli_connect('127.0.0.1:3307', 'root', $dbPassword, 'hair_appointments');

    if($conn->connect_error){
        die('Connection Failed: ' . $conn->connect_error);
    } else {
        // Prepare and execute the SQL statement
        $stmt = $conn->prepare("INSERT INTO appointments (firstName, lastName, phone, appType, hairstyle, appTime, email, price, appDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssissssis", $firstName, $lastName, $number, $appType, $hairstyle, $appTime, $email, $price, $appDate);
        $stmt->execute();
        echo "Appointment scheduled successfully";
        $stmt->close();
        $conn->close();
    }
?>
