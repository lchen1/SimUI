<?php 
$row=$_POST['row'];
echo $row;
$txt = fopen("test.json","w");
fwrite($txt,$row);

shell_exec("LD_LIBRARY_PATH=/bin/varian /bin/varian/MicroGCweb_new.exe -s 10.72.99.242 -Q ./test.json 2>/dev/null");
?>
