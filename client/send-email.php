<?php
/**
 * Created by PhpStorm.
 * User: Nazariy.Banakh
 * Date: 09.02.2015
 * Time: 13:55
 */
$txt = $_POST['email_or_tel'];

echo $txt;

$to = "contact@courseyard.com";
$subject = "Send from site Courseyard";
$headers = "From: contact@courseyard.com";


//mail($to,$subject,$txt,$headers);


?>
