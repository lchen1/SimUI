<?php
$def_dir="../SampleData/var/varian/";

$first_dir="../SampleData/mnt/usbdisk/gcroot/";
$usbc=shell_exec("cat ../SampleData/var/GC_App.ini | grep '^USBC_SERVERDIR'");
$second_dir=trim(substr($usbc, 15));
$usbdir=$first_dir.$second_dir."/";				 	

$datfilelist=glob($usbdir."Chrom*.dat");
$txtfilelist=glob($usbdir."SampRslt*.txt");
//echo $datfilelist;
for ($i=0;$i<count($datfilelist);$i++){
    // truncate left string 'Chrom_'
    $datname[$i]=ltrim(basename($datfilelist[$i],".dat"),"Chrom_");							
}
for ($j=0;$j<count($txtfilelist);$j++){
    $txtname[$j]=ltrim(basename($txtfilelist[$j],".txt"),"SampRslt_");
}
$filelist=array_merge(array_unique(array_merge($datname,$txtname)));
sort($filelist);
//var_dump($filelist);
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Chram Data</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/w3.css">
    <link rel="stylesheet" href="../css/w3-theme-blue.css">
    <link rel="stylesheet" href="../lib/fonts/font-awesome-4.4.0/css/font-awesome.min.css">

	<script src="../js/jquery-1.11.3.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="../js/jquery.localize.js" type="text/javascript" charset="utf-8"></script>
    <script src="../js/dygraph-combined.js" type="text/javascript" charset="utf-8"></script>
    <script src="../js/chrom.js" type="text/javascript" charset="utf-8"></script>

    <style>
        .sw-tn {
        display: none;
        }
        .plot {
        display: none;
        }
        
    </style>
  </head>

  <body class="w3-small">
    <div id="dlist">
      <table class="w3-table-all w3-reponsible">
      <tr class="w3-theme-light"><td colspan="2">Latest Data</td><td><a href='javascript:void(0)' class='w3-btn w3-theme' onclick="show_detail('<?php echo $def_dir ?>','')"><i class='fa fa-area-chart'></i></a></td></tr>
<?php
// echo "<input type='hidden' name='dir' value='$dir' />";
for ($i=0; $i<count($filelist); $i++) {  
    //$filename[$i]=basename($filelist[$i],".dat");
    //echo "<option onclick=document.getElementById('form').submit();>".$filename[$i]."</option>";
    echo "<tr><td>$filelist[$i]</td><td>$second_dir</td>";
    echo "<td><a href='javascript:void(0)' class='w3-btn w3-theme' onclick='show_detail(\"$usbdir\", \"$filelist[$i]\")'><i class='fa fa-area-chart'></i></a></td></tr>\n";
}
?>
      </table>
    </div>
    
    <div id="dcontent" style="position:relative;display:none">
      <a href="javascript:void(0)" class="w3-btn-floating w3-theme" style="position:fixed;z-index:10;top:50px;left:5px;" onclick="show_list()"><i class="fa fa-angle-double-left"></i></a>
      <div id="graphs">
        <div class="w3-container w3-teal">
          <a href="javascript:void(0)" id="sw1" class="w3-red sw-btn" onclick='switchChannelPlot(1)'>C 1</a>
          <a href="javascript:void(0)" id="sw2" class="w3-red sw-btn" onclick='switchChannelPlot(2)'>C 2</a>
          <a href="javascript:void(0)" id="sw3" class="w3-red sw-btn" onclick='switchChannelPlot(3)'>C 3</a>
          <a href="javascript:void(0)" id="sw4" class="w3-red sw-btn" onclick='switchChannelPlot(4)'>C 4</a>
        </div>
        <div class="w3-tab">
          <div id="link4" class="w3-container plot">
            <div id="graph4"></div>
          </div>
          <div id="link3" class="w3-container plot">
            <div id="graph3"></div>
          </div>
          <div id="link2" class="w3-container plot">
            <div id="graph2"></div>
          </div>
          <div id="link1" class="w3-container plot">
            <div id="graph1"></div>
          </div>
        </div>
      </div>
      <div class="w3-container" style="margin-top:30px;">
        <pre id="report_content">
        </pre>
      </div>
      
    </div>
  </body>
</html>
