<?php
require_once($_SERVER["DOCUMENT_ROOT"].'/mailer/recaptchalib.php');

$secret = "6Lc4oOgUAAAAAB2amUda6kq_4jCpKiIgLMaGSJi3";

$response = null;

$reCaptcha = new ReCaptcha($secret);
if ($_POST["g-recaptcha-response"]) {
$response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST['uname']) && (empty($_POST['uemail']))){
    echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
  } else {
    if ($response != null && $response->success) {
    if (isset($_POST['uname'])) {
      $uname = strip_tags($_POST['uname']);
      $unameFieldset = "<b>Имя пославшего:</b>";
    }
    if (isset($_POST['uemail'])) {
      $uemail = strip_tags($_POST['uemail']);
      $uemailFieldset = "<b>Почта:</b>";
    }
    if (isset($_POST['umessage'])) {
      $umessage = strip_tags($_POST['umessage']);
      $umessageFieldset = "<b>Сообщение:</b>";
    }
	if (isset($_POST['ucomment'])) {
      $ucomment = strip_tags($_POST['ucomment']);
      $ucommentFieldset = "<b>Заголовок:</b>";
    }
	
    $to = "admin@simplewebpage.ru"; 
    $sendfrom = "admin@simplewebpage.ru"; 
    $headers  = "From: " . "admin@simplewebpage.ru" . "\r\n";
    $headers .= "Reply-To: ". "admin@simplewebpage.ru" . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $headers .= "Content-Transfer-Encoding: 8bit \r\n";
    $subject = "$ucommentFieldset $ucomment";
    $message = "$unameFieldset $uname<br>
                $uemailFieldset $uemail<br>
                $formInfoFieldset $umessage";
 
    $send = mail ($to, $subject, $message, $headers);
        if ($send == 'true') {
            echo '<p class="success">Заявка успешно отправлена!</p>';
        } else {
          echo '<p class="fail"><b>Ошибка. Ошибка. Заявка не отправлена!</b></p>';
        }
    } else {
      echo '<p class="success">Ошибка. Вы не прошли проверку recaptcha.</p>';
    }
  }
} else {
      header ("Location: https://simplewebpage.ru"); 
}