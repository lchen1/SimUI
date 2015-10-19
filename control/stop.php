<?php
if (isset($_POST['type']) && ( $_POST['type'] == 'now' || $_POST['type'] == 'auto'))
{
	$tp=$_POST['type'];
    $info = shell_exec("LD_LIBRARY_PATH=/bin/varian /bin/varian/MicroGCweb_new.exe -s 10.72.99.242 -A $tp 2>/dev/null");
    echo "Stop run. mode: $tp.";
}
else
    echo "invalid argument";
?>
