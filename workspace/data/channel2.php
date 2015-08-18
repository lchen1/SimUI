<?php  
 


$path=$_POST['path'];
$file_header_type_t_lfiletype=file_get_contents($path,NULL,NULL, 0, 4);		  //数据结构
$file_header_type_t_lfileversion=file_get_contents($path,NULL,NULL, 4, 4);
$file_header_info_t=file_get_contents($path,NULL,NULL, 8, 264);
$chrom_header_ldatapoints_channel=file_get_contents($path,NULL,NULL, 272, 4*4);
$chrom_header_lfreq_channel=file_get_contents($path,NULL,NULL, 288, 4*4);
$chrom_header_reserved=file_get_contents($path,NULL,NULL, 304, 128);
$chrom_data=file_get_contents($path,NULL,NULL, 432);


$head=bin2hex($file_header_type_t_lfiletype);
$channel=unpack("I4",$chrom_header_ldatapoints_channel);
$freq=unpack("I4",$chrom_header_lfreq_channel);
$data=unpack("I*", $chrom_data);
//var_dump($data);




if ($head!='0800ff7f'){
	die('The data is wrong');
}
else{

	if ($channel[2]!=0){
		$data2=array_slice($data,$channel[1]+1,$channel[2]);
		echo json_encode($data2);
	}

}





?> 

