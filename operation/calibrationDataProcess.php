<?php
	header("Content-Type:text/html;charset=utf-8");
	header("Cache-Control:no-cache");

	$Datas=$_POST['Automation'];

	$filename="../calibration.json";
	$json_string=file_get_contents($filename);

	echo $json_string;

?>
