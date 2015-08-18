<?php 
$way=$_POST['way'];
$times=$_POST['times'];
$load=$_POST['load'];
// echo $way;
// echo $times;
// echo $operation
if ($way=="sequence"){
	if ($times){
	echo $times;
		//exec();}
	else {echo "error";}
}
elseif ($way=="single_run"){
	echo $way;
		//exec();
}
echo $load;
//exec();
?>