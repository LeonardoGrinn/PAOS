
<?php
if (isset($_POST['submit'])) {
  $name = $_POST['nombre'];
  $mailFrom = $_POST['email'];
  $message = "Hola, deseo recibir tus newsletter agregame a la lista: ".$name.".\n\n".$mailFrom;


  $mailTo = "correo@paosgdl.com"; //* contacto@landscapemexico.com */
  $headers = "From: ".$mailFrom;
  $txt = "Esta persona desea recibir tu newsletters: ".$name.".\n\n".$message;

  mail($mailTo, "Informacion para proyecto", $txt, $headers);

  header("Location: index.php?mailsend");

}
