<?php
if (isset($_POST['slotid']) && $_POST['slotid'] != '')
{
	$load=$_POST['slotid'];
    //echo $load;
    //exit;
    $info = shell_exec("LD_LIBRARY_PATH=/bin/varian /bin/varian/MicroGCweb_new.exe -s 10.72.99.242 -M $load 2>/dev/null");
    echo $info;
}
?>
