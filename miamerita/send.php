<?php
session_start();

$email_to = "info@mokanelacoffee.net"; 
$name     = $_POST['name'];  
$email    = $_POST['email'];
//$subject   = $_POST['subject'];
$subject  = "Contacto desde la Web";

$message  = '';
$message .= '<div style="border:1px solid #CCCCCC; width: 500px; margin:0px auto; padding:20px;">';
$message .= '<div align="center"><img src="http://www.mokanelacoffee.net/assets/img/logo.png" /></div>';
$message .= '<p align="justify">Contacto desde la Web con los siguientes datos:</p>';
$message .= '<p align="justify">Nombre: <strong>'.$_POST['name'].'</strong></p>';
$message .= '<p align="justify">Email: <strong>'.$_POST['email'].'</strong></p>';
$message .= '<p align="justify">Mensaje: <strong>'.$_POST['message'].'</strong></p>';
$message .= '<div style="background-color:#00FF00;">';
$message .= '<p align="center"><a href="http://www.mokanelacoffee.net">www.mokanelacoffee.net</a></p>';
$message .= '</div>';
$message .= '</div>';

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: MOKANELA <info@mokanelacoffee.net>\r\n";
$headers .= "Reply-To: $email\r\n";

if(mail($email_to, $subject, $message, $headers)) {
    echo '<script language="javascript" type="text/javascript">';
    echo 'alert("Thank you, Your message has been sent");';
    echo 'location.href = "index.html";';
    echo '</script>';
} else{
    echo "failed";     
}  
?>
