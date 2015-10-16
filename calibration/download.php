<?php 
if (isset($_POST['row']) && $_POST['row'] != '')
{
    $row=$_POST['row'];
    $txt = fopen("/tmp/caltb.json","w");
    fwrite($txt,$row);
    fclose($txt);

    $info = shell_exec("LD_LIBRARY_PATH=/bin/varian /bin/varian/MicroGCweb_new.exe -s 10.72.99.242 -C /tmp/caltb.json 2>/dev/null");
    echo $info;
}
?>
