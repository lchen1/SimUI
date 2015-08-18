     <?php
	$filename=$_POST['filename'];
	$dir=$_POST['dir'];
	//var_dump($dir);
	$data_dat=$dir."Chrom_".$filename.".dat";
	$data_json=$dir."SampRslt_".$filename.".json";
	$data_txt=$dir."SampRslt_".$filename.".txt";
	?> 
<!DOCTYPE html>
<html>
<head>
	<title>490 MicroGC</title>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<meta name="Author" content="SHU Mslin/Liu">
    <link rel="stylesheet" type="text/css" href="../../css/data.css">

    <script src="../../js/jquery-1.11.3.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="../../js/jquery.localize.js" type="text/javascript" charset="utf-8"></script>
    <script src="../../js/language_cookie.js" type="text/javascript" charset="utf-8"></script>

	<script type="text/javascript" src="sources/dygraph-combined.js"></script>
	<script type="text/javascript">
        
        function getXmlHttpObject(){

            var xmlHttpRequest;

            if (window.ActiveXObject) {

                xmlHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");

            }else {

                xmlHttpRequest=new XMLHttpRequest();
                // window.alert("hf");
            }

            return xmlHttpRequest;
        }

        var myXmlHttpRequest1="";
        var myXmlHttpRequest2="";
        var myXmlHttpRequest3="";
        var myXmlHttpRequest4="";

        function updateGraph(){

             // window.alert("ok");

            myXmlHttpRequest1=getXmlHttpObject();
            myXmlHttpRequest2=getXmlHttpObject();
            myXmlHttpRequest3=getXmlHttpObject();
            myXmlHttpRequest4=getXmlHttpObject();
            if (myXmlHttpRequest1) {

                // window.alert("ok");

                var url="channel1.php";
                // var data="data[]=Automation&data[]=GC&data[]=GC_Channel";
                var data="path="+"<?php echo $data_dat;?>";
                //window.alert(data);

                myXmlHttpRequest1.open("post",url,true);

                myXmlHttpRequest1.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

                myXmlHttpRequest1.onreadystatechange=graph1;

                myXmlHttpRequest1.send(data);
            }
            if (myXmlHttpRequest2) {

                // window.alert("ok");

                var url="channel2.php";
                // var data="data[]=Automation&data[]=GC&data[]=GC_Channel";
                var data="path="+"<?php echo $data_dat;?>";

                myXmlHttpRequest2.open("post",url,true);

                myXmlHttpRequest2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

                myXmlHttpRequest2.onreadystatechange=graph2;

                myXmlHttpRequest2.send(data);
            }
            if (myXmlHttpRequest3) {

                // window.alert("ok");

                var url="channel3.php";
                // var data="data[]=Automation&data[]=GC&data[]=GC_Channel";
                var data="path="+"<?php echo $data_dat;?>";

                myXmlHttpRequest3.open("post",url,true);

                myXmlHttpRequest3.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

                myXmlHttpRequest3.onreadystatechange=graph3;

                myXmlHttpRequest3.send(data);
            }
            if (myXmlHttpRequest4) {

                // window.alert("ok");

                var url="channel4.php";
                // var data="data[]=Automation&data[]=GC&data[]=GC_Channel";
                var data="path="+"<?php echo $data_dat;?>";

                myXmlHttpRequest4.open("post",url,true);

                myXmlHttpRequest4.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

                myXmlHttpRequest4.onreadystatechange=graph4;

                myXmlHttpRequest4.send(data);
            }
        
        }

        function graph1(){
            if (myXmlHttpRequest1.readyState==4 && myXmlHttpRequest1.status==200) {
                //chuli
                //window.alert("ok");
                var res_objects1=[];
                res_objects1=eval("("+myXmlHttpRequest1.responseText+")");
                }
            var d1 = [];
            var length=res_objects1.length;
            for (i=1;i<=length;i++) {
                d1.push([0.01*i, res_objects1[i]/1000]);
              }
              new Dygraph(document.getElementById("graph1"),
                      d1,
                      {
                        labels: [ "seconds", "mv" ],
                        title: "channel 1",
                        legend:'always',
                        width:500,
                        height:150
                      });
            //window.setTimeout(updateData(),(10*length+1));
            }
            function graph2(){
            if (myXmlHttpRequest2.readyState==4 && myXmlHttpRequest2.status==200) {
                //chuli
                //window.alert("ok");
                var res_objects2=[];
                res_objects2=eval("("+myXmlHttpRequest2.responseText+")");
                //window.alert(res_objects[]);
                }
            var d2 = [];
            var length=res_objects2.length;
            for (i=1;i<=length;i++) {
                d2.push([0.01*i, res_objects2[i]/1000]);
              }
            new Dygraph(document.getElementById("graph2"),
                      d2,
                      {
                        labels: [ "seconds", "mv" ],
                        title: "channel 2",
                        legend:'always',
                        width:500,
                        height:150
                      });
            //window.setTimeout(updateData(),(10*length+1));
            }
            function graph3(){
            if (myXmlHttpRequest3.readyState==4 && myXmlHttpRequest3.status==200) {
                //chuli
                //window.alert("ok");
                var res_objects3=[];
                res_objects3=eval("("+myXmlHttpRequest3.responseText+")");
                //window.alert(res_objects[]);
                }
            var d3 = [];
            var length=res_objects3.length;
            for (i=1;i<=length;i++) {
                d3.push([0.01*i, res_objects3[i]/1000]);
              }
            new Dygraph(document.getElementById("graph3"),
                      d3,
                      {
                        labels: [ "seconds", "mv" ],
                        title: "channel 3",
                        legend:'always',
                        width:500,
                        height:150
                      });
            //window.setTimeout(updateData(),(10*length+1));
            }
            function graph4(){
            if (myXmlHttpRequest4.readyState==4 && myXmlHttpRequest4.status==200) {
                //chuli
                //window.alert("ok");
                var res_objects4=[];
                res_objects4=eval("("+myXmlHttpRequest4.responseText+")");
                //window.alert(res_objects[]);
                }
            //window.alert(res_objects.length);
            
            var d4 = [];    
            var length=res_objects4.length;
            for (i=1;i<=length;i++) {
                    d4.push([0.01*i, res_objects4[i]/1000]);
                 }
                    new Dygraph(document.getElementById("graph4"),
                         d4,
                            {
                            labels: [ "seconds", "mv" ],
                            title: "channel 4",
                        legend:'always',
                        width:500,
                        height:150
                            });
    //window.setTimeout(updateData(),(10*length+1));
                }

    updateGraph();



    var myXmlHttpRequest="";

    function updateData(){

        myXmlHttpRequest=getXmlHttpObject();

        if (myXmlHttpRequest) {

            var url="reportDataProcess.php";
            var data="path="+"<?php echo $data_json;?>";
            //window.alert(data);

            myXmlHttpRequest.open("post",url,true);

            myXmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

            myXmlHttpRequest.onreadystatechange=chuli;

            myXmlHttpRequest.send(data);
        }

    }

    function chuli(){
        if (myXmlHttpRequest.readyState==4 && myXmlHttpRequest.status==200) {

            var res_objects=eval("("+myXmlHttpRequest.responseText+")");

            getId('Injection_time').innerHTML=res_objects.STRoot.Results.Sample_rlt.Injection_time;
            getId('Run_id').innerHTML=res_objects.STRoot.Results.Sample_rlt.Run_id;
            getId('Run_type').innerHTML=res_objects.STRoot.Results.Sample_rlt.Run_type;
            getId('Calibration_level').innerHTML=res_objects.STRoot.Results.Sample_rlt.Calibration_level;
            getId('Sample_stream').innerHTML=res_objects.STRoot.Results.Sample_rlt.Sample_stream;
            getId('Alarms').innerHTML=res_objects.STRoot.Results.Sample_rlt.Alarms;

            getId('Active_method').innerHTML=res_objects.STRoot.Results.Energy_meter.Active_method;
            getId('Compressibility_air_unit').innerHTML=res_objects.STRoot.Results.Energy_meter.Compressibility_air.Unit;
            getId('Compressibility_air_value').innerHTML=res_objects.STRoot.Results.Energy_meter.Compressibility_air.Value;

            getId('Ref_temp_unit').innerHTML=res_objects.STRoot.Results.Energy_meter.Ref_temp.Unit;
            getId('Ref_temp_value').innerHTML=res_objects.STRoot.Results.Energy_meter.Ref_temp.Value;

            getId('Compressibility_unit').innerHTML=res_objects.STRoot.Results.Energy_meter.Compressibility.unit;
            getId('Compressibility_value').innerHTML=res_objects.STRoot.Results.Energy_meter.Compressibility.Value;

            getId('Molar_mass_unit').innerHTML=res_objects.STRoot.Results.Energy_meter.Molar_mass.Unit;
            getId('Molar_mass_value').innerHTML=res_objects.STRoot.Results.Energy_meter.Molar_mass.Value;

            getId('Molar_mass_ratio_unit').innerHTML=res_objects.STRoot.Results.Energy_meter.Molar_mass_ratio.Unit;
            getId('Molar_mass_ratio_value').innerHTML=res_objects.STRoot.Results.Energy_meter.Molar_mass_ratio.Value;

            getId('Rel_density_unit').innerHTML=res_objects.STRoot.Results.Energy_meter.Rel_density.Unit;
            getId('Rel_density_value').innerHTML=res_objects.STRoot.Results.Energy_meter.Rel_density.Value;

            getId('Abs_density_unit').innerHTML=res_objects.STRoot.Results.Energy_meter.Abs_density.Unit;
            getId('Abs_density_value').innerHTML=res_objects.STRoot.Results.Energy_meter.Abs_density.Value;

            getId('Hs_unit').innerHTML=res_objects.STRoot.Results.Energy_meter.Hs.Unit;
            getId('Hs_value').innerHTML=res_objects.STRoot.Results.Energy_meter.Hs.Value;

            getId('Hi_unit').innerHTML=res_objects.STRoot.Results.Energy_meter.Hi.Unit;
            getId('Hi_value').innerHTML=res_objects.STRoot.Results.Energy_meter.Hi.Value;

            getId('Wobbe_sup_unit').innerHTML=res_objects.STRoot.Results.Energy_meter.Wobbe_sup.Unit;
            getId('Wobbe_sup_value').innerHTML=res_objects.STRoot.Results.Energy_meter.Wobbe_sup.Value;

            getId('Wobbe_inf_unit').innerHTML=res_objects.STRoot.Results.Energy_meter.Wobbe_inf.Unit;
            getId('Wobbe_inf_value').innerHTML=res_objects.STRoot.Results.Energy_meter.Wobbe_inf.Value;

            var num=res_objects.STRoot.Results.Application_rlt.Size;

            var mytable=document.getElementById("table3");

            var arr=mytable.rows.length;

            for(j=1;j<=arr-1;j++){
                mytable.deleteRow(j);
                arr=arr-1;
                j=j-1;

            }

            for(var i=0;i<=num-1;i++){
                
                var mytr=mytable.insertRow();
                var mytd1=document.createElement("td");
                var mytd2=document.createElement("td");
                var mytd3=document.createElement("td");
                var mytd4=document.createElement("td");
                mytd1.innerHTML=res_objects.STRoot.Results.Application_rlt.Components[i].Name;
                mytd2.innerHTML=res_objects.STRoot.Results.Application_rlt.Components[i].ESTD;
                mytd3.innerHTML=res_objects.STRoot.Results.Application_rlt.Components[i].Norm;
                mytd4.innerHTML=res_objects.STRoot.Results.Application_rlt.Components[i].Weight;
                mytr.appendChild(mytd1);
                mytr.appendChild(mytd2);
                mytr.appendChild(mytd3);
                mytr.appendChild(mytd4);
            }
        }
    }

    function getId(id){
        return document.getElementById(id);
    }

    //window.setInterval("updateData()",1000);
    updateData();


    </script>
</head>
<body>   
<?php 
            	if (file_exists($data_json)){
            		echo "<script>updateData()</script>";
            	}
            	elseif (file_exists($data_txt)) {
            		$txt = fopen("$data_txt","r");
					while(!feof($txt)){
  					echo fgets($txt). "<br />";
  						}
					fclose($txt);
					echo "<script>";
					echo '$(document).ready(function(){$("#body").hide()});';
					echo "</script>";
            		}
                else {
                    echo "<script>";
                    echo '$(document).ready(function(){$("#body").hide()});';
                    echo "</script>";
                }           	
            
 ?> 
<div id="body">
            <div id="content">
                <table id="tabel1" cellpadding="5" cellspacing="5">
                    <tr>
                        <td class="double"><b data-localize="report.samp_Res">Sample Results</b></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Injection_time">Injection time</td>
                        <td id="Injection_time" class="font_blue"></td>
                        <td data-localize="report.Run_id">Run ID</td>
                        <td id="Run_id" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Run_type">Run type</td>
                        <td id="Run_type" class="font_blue"></td>
                        <td data-localize="report.Calibration_level">Calibration level</td>
                        <td id="Calibration_level" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Sample_stream">Sample stream</td>
                        <td id="Sample_stream" class="font_blue"></td>
                        <td data-localize="report.Alarms">Alarms</td>
                        <td id="Alarms" class="font_blue"></td>
                    </tr>
                </table>

                <hr/>

                <table id="table2" cellpadding="5" cellspacing="5">
                    <tr>
                        <td data-localize="report.Energy_meter" class="double"><b>Energy meter</b></td>
                        <td class="font_blue"></td>
                        <td class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Active_Method" class="double">Active Method</td>
                        <td ></td>
                        <td id="Active_method" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Compressibility_air" class="double">Compressibility air</td>
                        <td id="Compressibility_air_unit"></td>
                        <td id="Compressibility_air_value" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Reference_temperature" class="double">Reference temperature</td>
                        <td id="Ref_temp_unit"></td>
                        <td id="Ref_temp_value" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Compressibility" class="double">Compressibility</td>
                        <td id="Compressibility_unit"></td>
                        <td id="Compressibility_value" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Molar_Mass" class="double">Molar Mass</td>
                        <td id="Molar_mass_unit"></td>
                        <td id="Molar_mass_value" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Molar_Mass_Ratio" class="double">Molar Mass Ratio</td>
                        <td id="Molar_mass_ratio_unit"></td>
                        <td id="Molar_mass_ratio_value" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Rel_Density" class="double">Rel.Density</td>
                        <td id="Rel_density_unit"></td>
                        <td id="Rel_density_value" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Abs_Density" class="double">Abs.Density</td>
                        <td id="Abs_density_unit"></td>
                        <td id="Abs_density_value" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Hs" class="double">Hs</td>
                        <td id="Hs_unit"></td>
                        <td id="Hs_value" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Hi" class="double">Hi</td>
                        <td id="Hi_unit"></td>
                        <td id="Hi_value" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Wobbe_Sup" class="double">Wobbe Sup.</td>
                        <td id="Wobbe_sup_unit"></td>
                        <td id="Wobbe_sup_value" class="font_blue"></td>
                    </tr>
                    <tr>
                        <td data-localize="report.Wobbe_Inf" class="double">Wobbe Inf.</td>
                        <td id="Wobbe_inf_unit"></td>
                        <td id="Wobbe_inf_value" class="font_blue"></td>
                    </tr>
                </table>
            </div>
            <div id="div_right">
                <table id="table3" cellpadding="5" cellspacing="5" class="font_blue">
                    <tr class="font_black">
                        <td data-localize="report.Components">Components</td>
                        <td data-localize="report.ESTD">ESTD</td>
                        <td data-localize="report.Norms">Norms%</td>
                        <td data-localize="report.Weight">Weight%</td>
                    </tr>
                </table>
            </div>
        </div> 
        
        
        
        
                  
	<div id="graph">
    	<table>
    		<tr>
        		<td><div id="graph1"></div></td>
            	<td><div id="graph2"></div></td>
            </tr>
            <tr>
            	<td><div id="graph3"></div></td>
            	<td><div id="graph4"></div></td>
    		</tr>
    	</table>                                                                             
    </div>

</body>
</html>
