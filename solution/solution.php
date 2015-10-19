<!DOCTYPE html>
<html>
  <head>
    <title>490 Solution</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../css/w3.css" />
    <link rel="stylesheet" type="text/css" href="../css/w3-theme-blue.css">
    <link rel="stylesheet" type="text/css" href="../css/solution.css" />
    <script type="text/javascript" src="../js/jquery-1.11.3.min.js"></script>
    <script type="text/javascript" src="../js/solution.js"></script>
  </head>

  <body class="w3-small">
    <div class="w3-container">
<?php
$filelist=glob("/var/varian/MulMthd/slot[0-9]");
//var_dump($filelist);
for ($i=0; $i < count($filelist); $i++)
{
  $fname=basename($filelist[$i]);
  //echo "<p>",basename($name),"</p>";
  $id = filter_var($fname, FILTER_SANITIZE_NUMBER_INT);
  //echo "<p>$id</p>";
  // Read file contents
  $fp = fopen("$filelist[$i]"."/INFO.DAT", "rb");
  $name = fgets($fp);
  fseek($fp, 0);
  $solution = fread($fp,filesize($filelist[$i]));

  echo "<div class='w3-card w3-container w3-theme-d2 flip' id='flip".$id."' onclick='togglePanel($id)'>$id. $name</div>\n";
  echo "<div id='panel".$id."' class='w3-card-4 w3-yellow panel'>\n";
  // load button
  echo "<div class='w3-container'><form action='solution_load.php' method='post' target='hidden_frame'>";
  echo "<input type='hidden' name='slotid' value='$id'>";
  echo "<input type='submit' class='w3-btn w3-theme' value='Load' onclick='showWarning(event)'>";
  echo "</form></div>\n";
  // content
  echo "<div class='w3-container content'><pre>\n";
  echo $solution;
  echo "</pre></div>\n";
  echo "</div>\n";

  fclose($fp);
}
?>
    </div>
    <iframe id="iframe" name="hidden_frame" width=0 height=0><iframe>
  </body>
  
</html>

