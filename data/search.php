<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- <link rel="stylesheet" type="text/css" href="../css/data.css" /> -->
    <script src="../js/jquery-1.11.3.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="../js/jquery.localize.js" type="text/javascript" charset="utf-8"></script>
    <script src="../js/language_cookie.js" type="text/javascript" charset="utf-8"></script>

    <link rel="stylesheet" type="text/css" href="../js/easyui/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="../js/easyui/themes/icon.css">
    <script type="text/javascript" src="../js/easyui/jquery.easyui.min.js"></script>

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
    <style type="text/css">
      #form li {width: 100%; height: auto; display: block;}
      #form li input {width: 100%; display: inline-block; border: 0; list-style: none;text-align: left;background-color: transparent;}
      #form li a {width: 100%;display: inline-block;text-decoration: none;color: #333;}
      #form li span {font-style: 50px;}
    </style>

</head>
<body id="search_body">
  <form id="form" action="load.php" method="post" target="iframe">
    <ul class="easyui-tree">
      <li>
      <span>Latest Data</span>
      <ul>
        <li><a href="currentData.html" target="iframe" data-localize="data.local_data">Latest Data</a></li>
      </ul>
      </li>
      <li>
      <span>History Data</span>
      <ul>
        <?php
        $first_dir="../SampleData/mnt/usbdisk/gcroot/";
        $sh=shell_exec("cat ../SampleData/var/GC_App.ini | grep '^USBC_SERVERDIR'");
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
        // echo "<input type='hidden' name='dir' value='$dir' />";
        for ($i=0; $i<count($filelist); $i++) {  
        $filename[$i]=basename($filelist[$i],".dat");
        //echo "<option onclick=document.getElementById('form').submit();>".$filename[$i]."</option>";
        echo "<li class=''><input type='submit' name='filename' value='$filename[$i]' /></li>";						
        }												
        ?>
      </ul>
      </li>
    </ul>							
  </form> 	
</body>
</html>
