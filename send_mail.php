<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "jitendra.citizeninfotechnepal@gmail.com";   // <-- MY EMAIL
    $headers = "From: $email \r\n";
    $body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

    if(mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } 
    else {
        echo "Failed to send message.";
    }
}
?>
