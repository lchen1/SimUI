<!DOCTYPE html>
<html>
<head>
	<title>490 MicroGC</title>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<meta name="Author" content="SHU Mslin/Liu">
    <link rel="stylesheet" type="text/css" href="../css/css.css" />
    <script src="../js/jquery-1.11.3.min.js"></script>

</head>
<body>
	<div id="catContent">       
        <div class="details" id="dtcontent">
            <div id="solution">
                <form action="solution_info.php" method="post" target="info" >
                	<table>
                        <tr>			  									
    					 	<?php
    						$filelist=glob("../SampleData/var/varian/MulMthd/slot*");
    						//var_dump($filelist);
    						for ($i=0; $i<count($filelist); $i++) {
    							$path[$i]=$filelist[$i]."/INFO.DAT";  
    							$f[$i]=fopen("$path[$i]","rb");
    							$name[$i]=fgets($f[$i]);
    							fclose($f[$i]);							
     							echo "<td><input type='submit' name='name' value='$name[$i]'></td>";	
     							echo "<input type='hidden' name='$name[$i]' value='$path[$i]'>";										
    							}
    						?>
    					</tr>
                    </table>															
				</form> 
            </div>

            <hr />

            <iframe name="info" width="100%" height="480" scrolling="yes"></iframe>

            <form class="load" action="run.php" method="post" target="hiddeniframe">
				<input type="submit" name="load" value="load"/>
			</form>
			
			<iframe name="hiddeniframe" width=0 height=0></iframe>
			
        </div>
    </div>

</body>
</html>
