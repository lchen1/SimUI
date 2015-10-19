<?php
header("Content-Type: text/plain");
header("Expires: on, 01 Jan 1970 00:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");	

if (isset($_POST['dir']) && isset($_POST['target']))
{
    if ($_POST['target'] == '')
       $path=$_POST['dir'].'SAMPRSLT.TXT';
    else
        $path=$_POST['dir'].'SampRslt_'.$_POST['target'].'.txt';
}
else {
   $path="/var/varian/SAMPRSLT.TXT";
}

$data="Report File Not Found!";
if (file_exists($path))
    $data=file_get_contents($path);
echo $data;
?>
