<?php
	header("Content-Type:text/html;charset=utf-8");
	header("Cache-Control:no-cache");
	
	//$userdata=$_POST['config'];

	$info=shell_exec("LD_LIBRARY_PATH=/bin/varian /bin/varian/MicroGCweb_new.exe -s 10.72.99.242 -g 2>/dev/null");
	echo $info;
?>
