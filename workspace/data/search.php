<!DOCTYPE form PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">

<link rel="stylesheet" type="text/css" href="../../css/data.css" />

    <script src="../../js/jquery-1.11.3.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="../../js/jquery.localize.js" type="text/javascript" charset="utf-8"></script>
    <script src="../../js/language_cookie.js" type="text/javascript" charset="utf-8"></script>

    <script type="text/javascript">
    	$(document).ready(function(){
		  	$("li").click(function(){
		  		$("li").removeClass("cur");
				$(this).attr("class","cur");
			});
		});
    	 function myrefresh(){
    		window.location.reload();
    		}
    	 window.setInterval('myrefresh()',5000);

    	
    </script>



</head>
<body id="search_body">
		<form id="form" action="load.php" method="post" target="iframe">				  				
        	<ul>
        		<li data-localize="data.local_data" id="local">Local Data</li>
				<li class="cur"><input type='submit' formaction='currentData.html' value='new data'/></li>
				<li data-localize="data.usb_data" id="usb">USB Data</li>
					<?php
					 	$first_dir="../../SampleData/mnt/usbdisk/gcroot/";
					 	$sh=shell_exec("cat ../../SampleData/var/GC_App.ini | grep '^USBC_SERVERDIR'");
						$second_dir=ltrim(trim($sh),'USBC_SERVERDIR:');
					 	//$second_dir="Mytests/test2";
					 	$dir=$first_dir.$second_dir."/";				 	
											 						 	
						$datfilelist=glob($dir."Chrom*.dat");
						$txtfilelist=glob($dir."SampRslt*.txt");
						//echo $datfilelist[0];
						for ($i=0;$i<count($datfilelist);$i++){
							$datname[$i]=ltrim(basename($datfilelist[$i],".dat"),"Chrom_");							
						}
						for ($j=0;$j<count($txtfilelist);$j++){
							$txtname[$j]=ltrim(basename($txtfilelist[$j],".txt"),"SampRslt_");
						}
						$filelist=array_merge(array_unique(array_merge($datname,$txtname)));
						
						//var_dump($filelist);																						
						echo "<input type='hidden' name='dir' value='$dir' />";
						for ($i=0; $i<count($filelist); $i++) {  
						$filename[$i]=basename($filelist[$i],".dat");
						//echo "<option onclick=document.getElementById('form').submit();>".$filename[$i]."</option>";
						echo "<li class=''><input type='submit' name='filename' value='$filename[$i]' /></li>";						
						}												
					?>
			</ul>									
		</form> 	
</body>
</html>
