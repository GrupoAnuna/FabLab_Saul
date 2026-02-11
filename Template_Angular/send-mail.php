<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");



    $to = "jesusomar.dev@gmail..com";
    $subject = "Nueva solicitud desde pagina web";

    $message = "
        Nombre: Correo de prueba <br>
        Correo: omarj5161@gmial.com <br>
        Servicio: servicio de ejmplo <br>
        Urgencia: No aplica <br>
        Descripción: Esto es una descripción
    ";

    $headers = "From:  omarj5161@gmial.com ";
    $headers .= "Reply-To:  omarj5161@gmial.com ";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    echo mail($to, $subject, $message, $headers)
        ? "OK" : "ERROR";

?>