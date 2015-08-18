    <?php
	$name=$_POST['name'];
	$path=$_POST[$name];
	//echo $path;
	?> 
<!DOCTYPE html>
<html>
<head>
	<title>490 MicroGC</title>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<meta name="Author" content="SHU Mslin/Liu">
    <link rel="stylesheet" type="text/css" href="../css/css.css" />
</head>
<body>
<div id="catContent" align="center">                                                                           
        <?php
		$info = fopen("$path","rb");
		while(!feof($info)){
		$solution=fgets($info);
  		echo $solution. "<br />";
  		}
		fclose($info);
		?> 
</div>

</body>
</html>
