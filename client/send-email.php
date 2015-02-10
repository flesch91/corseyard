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

$headers  = "Content-type: text/html; charset=windows-1251 \r\n";
$headers .= "From: Courseyard.com <contact@courseyard.com>\r\n";


mail($to,$subject,$txt,$headers);


?>
