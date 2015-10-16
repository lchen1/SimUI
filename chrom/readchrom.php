<?php  
if (isset($_POST['dir']) && isset($_POST['target']))
{
    if ($_POST['target'] == '')
       $path=$_POST['dir'].'CHROM.DAT';
    else
       $path=$_POST['dir'].'Chrom_'.$_POST['target'].'.dat';
}
else {
   $path="../SampleData/var/varian/CHROM.DAT";
}

if (!file_exists($path))
{
    echo json_encode('No_data');
    exit;
}

$file=fopen($path, 'rb');
if (!$file)
{
    echo json_encode('error');
    exit;
}

$file_header_type_t_lfiletype=fread($file, 4); // magic word
$file_header_type_t_lfileversion=fread($file, 4);
$file_header_info_t=fread($file, 264);
$chrom_header_ldatapoints_channel=fread($file, 16);
$chrom_header_lfreq_channel=fread($file, 16);
$chrom_header_reserved=fread($file, 128);
$chrom_data=stream_get_contents($file); // remaining;

fclose($file);

$head=bin2hex($file_header_type_t_lfiletype);
$channel=unpack("I4",$chrom_header_ldatapoints_channel);
$freq=unpack("I4",$chrom_header_lfreq_channel);
$data=unpack("I*", $chrom_data);

//var_dump($channel);

if ($head!='0800ff7f'){
    echo json_encode('error');
}
else{
    if ($channel[1]!=0 || $channel[2]!=0 || $channel[3]!=0 || $channel[4]!=0){	

        $data1=array_slice($data,0,$channel[1]);
        $data2=array_slice($data,$channel[1],$channel[2]);
        $data3=array_slice($data,$channel[1]+$channel[2],$channel[3]);
        $data4=array_slice($data,$channel[1]+$channel[2]+$channel[3],$channel[4]);

        $output = array(
            "len1" => $channel[1],
            "len2" => $channel[2],
            "len3" => $channel[3],
            "len4" => $channel[4],
            "d1" => $data1,
            "d2" => $data2,
            "d3" => $data3,
            "d4" => $data4
        );

        echo json_encode($output);
    }
    else{
        echo json_encode('No_data');
    }
}
?> 

