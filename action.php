
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$pdo = new PDO ('mysql:host=192.168.0.2; dbname=info', 'roman85', 'pass123K24');
$sql = $pdo->prepare("INSERT INTO subscribe (name_user, email) VALUES (?,?)");
$sql->bindValue(1, $name);
$sql->bindValue(2, $email);
$sql->execute();
?>

