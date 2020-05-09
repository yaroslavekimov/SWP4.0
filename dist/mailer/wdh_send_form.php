<?php
require_once($_SERVER["DOCUMENT_ROOT"].'/recaptchalib.php');
// Введите свой секретный ключ
$secret = "6Lc4oOgUAAAAAB2amUda6kq_4jCpKiIgLMaGSJi3";
// пустой ответ каптчи
$response = null;
// Проверка вашего секретного ключа
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
      $formInfo = strip_tags($_POST['umessage']);
      $formInfoFieldset = "<b>Сообщение:</b>";
    }
 
    $to = "admin@simplewebpage.ru"; /*Укажите адрес, на который должно приходить письмо*/
    $sendfrom = "admin@simplewebpage.ru"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . "admin@simplewebpage.ru" . "\r\n";
    $headers .= "Reply-To: ". "admin@simplewebpage.ru" . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $headers .= "Content-Transfer-Encoding: 8bit \r\n";
    $subject = "Новая заявка:";
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
      header ("Location: https://simplewebpage.ru"); // главная страница вашего лендинга
}