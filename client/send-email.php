<?php
/**
 * Created by PhpStorm.
 * User: Nazariy.Banakh
 * Date: 09.02.2015
 * Time: 13:55
 */

$to = "somebody@example.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: webmaster@example.com" . "\r\n" .
  "CC: somebodyelse@example.com";

mail($to,$subject,$txt,$headers);
?>
