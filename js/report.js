        function getXmlHttpObject(){

            var xmlHttpRequest;

            if (window.ActiveXObject) {

                xmlHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");

            }else {

                xmlHttpRequest=new XMLHttpRequest();
            }

            return xmlHttpRequest;
        }

        var myXmlHttpRequest="";

        function updateData(){

            myXmlHttpRequest=getXmlHttpObject();

            if (myXmlHttpRequest) {

                var url="reportDataProcess.php";
                var data="Automation"

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

        window.setInterval("updateData()",1000);

        function switch_page1(){
            document.getElementById('iframe').src="report_txt.html";
        }

        function switch_page2(){
            document.getElementById('iframe').src="chromatograph.html";
        }