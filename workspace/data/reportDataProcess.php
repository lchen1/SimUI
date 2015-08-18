<?php
	header("Content-Type:text/html;charset=utf-8");
	header("Cache-Control:no-cache");

	$f=$_POST['path'];
	//echo $filename;
	//$filename="../result.json";
	if ($f){
		$json_string=file_get_contents($f);		
		echo $json_string;
	}
	else {
		$f="../../SampleData/result.json";
		$json_string=file_get_contents($f);
		echo $json_string;
	}
	

?>
