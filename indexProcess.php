<?php
    header("Content-Type: application/json");
    header("Expires: on, 01 Jan 1970 00:00:00 GMT");
    header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");	

	//$userdata=$_POST['userdata'];
	$info=shell_exec("LD_LIBRARY_PATH=/bin/varian /bin/varian/MicroGCweb_new.exe -s 10.72.99.242 -t 2>/dev/null");
	echo $info;
?>

