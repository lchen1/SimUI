<?php
if (isset($_POST['dir']) && isset($_POST['target']))
{
    if ($_POST['target'] == '')
       $path=$_POST['dir'].'SAMPRSLT.TXT';
    else
        $path=$_POST['dir'].'SampRslt_'.$_POST['target'].'.txt';
}
else {
   $path="../SampleData/var/varian/SAMPRSLT.TXT";
}

$data="Report File Not Found!";
if (file_exists($path))
    $data=file_get_contents($path);
echo $data;
?>
