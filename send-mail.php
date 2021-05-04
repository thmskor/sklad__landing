<?php

header('Content-Type: text/html; charset=utf-8');

$to = "skladcom02@gmail.com"; 

if(!empty($_POST["name"]) && !empty($_POST["phone"])){ 
    
    $name = trim(htmlspecialchars(strip_tags($_POST["name"])));
    $phone = trim(htmlspecialchars(strip_tags($_POST["phone"])));

    // указываем заголовки
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= 'To: SKLAD.COM <info@sklad.com>' . "\r\n";
    $headers .= 'From: SKLAD.COM <info@sklad.com>' . "\r\n";
    $headers .= 'Bcc: iam@thmskor.space' . "\r\n";
    
    
    $message = '
    <html>
        <head>
            <title>Новая заявка</title>
        </head>
        <body style="font-family:Arial,sans-serif;">
            <div style="padding: 10px;">
                <p><b>Имя:</b> "'.$name.'"</p>
                <p><b>Телефон:</b> "'.$phone.'"</p>
            </div>
        </body>
    </html>
    ';
    
    if(mail($to, "Новая заявка", $message, $headers)){ 
        echo json_encode(array('success' => 1));
    } else{ 
        echo json_encode(array('success' => 0));
    }
            
} else{ 
    echo "<div class='i_false'>Необходимо заполнить все поля!</div>"; 
}

?>
