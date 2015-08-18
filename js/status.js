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

                var url="statusDataProcess.php";

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
                getId('GC_time').innerHTML=res_objects.STRoot.General.GC_time;
                getId('current_time').innerHTML=time();
                // getId('current_time').innerHTML=new Date().toLocaleString();

                //GC Status
                getId('Sample_line_temp').innerHTML=res_objects.STRoot.Status.Sample_line_temp;
                getId('Cabinet_temp').innerHTML=res_objects.STRoot.Status.Cabinet_temp;
                getId('Cabinet_press').innerHTML=res_objects.STRoot.Status.Cabinet_press;
                getId('Service_switch').innerHTML=res_objects.STRoot.Status.Service_switch;
                getId('Automation_state').innerHTML=res_objects.STRoot.Status.Automation_state;
                getId('GC_state').innerHTML=res_objects.STRoot.Status.GC_state;
                getId('GC_status').innerHTML=res_objects.STRoot.Status.GC_status;
                getId('Error_code').innerHTML=res_objects.STRoot.Status.Error_code;
                getId('Curr_stream').innerHTML=res_objects.STRoot.Status.Curr_stream;  
                getId('Ext_ready_in').innerHTML=res_objects.STRoot.Status.Ext_ready_in;

                //Channel1
                if(res_objects.STRoot.Status.Channels.Channel1.Installed){
                    if(res_objects.STRoot.Status.Channels.Channel1.Enabled){
                        getId('Channel1').innerHTML="Channel1";

                        $(document).ready(function(){
                            $(".channel1").attr("class","action");
                            $("#Channel1").attr("class","set");
                            $("#set1").attr("class","set");
                            $("#act1").attr("class","set");
                        });
                    }
                    else{
                        getId('Channel1').innerHTML="Channel1<br/>disabled";
                    }
                    getId('Channel1_Description').innerHTML=res_objects.STRoot.Status.Channels.Channel1.Fixed.Description;
                    getId('Channel1_Carrier_gas').innerHTML=res_objects.STRoot.Status.Channels.Channel1.Fixed.Carrier_gas;
                    getId('Channel1_Serial_num').innerHTML=res_objects.STRoot.Status.Channels.Channel1.Fixed.Serial_num;



                    getId('Channel1_Column_temp_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel1.Variable.Column_temp;
                    getId('Channel1_Column_press_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel1.Variable.Column_press;
                    getId('Channel1_Injector_temp_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel1.Variable.Injector_temp;
                    getId('Channel1_Auto_zero_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel1.Variable.TCD.Auto_zero;
                    if (res_objects.STRoot.Status.Channels.Channel1.Variable.TCD.Calibrated) {
                        getId('Channel1_State_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel1.Variable.TCD.State+' / OK';
                    }
                    else {
                        getId('Channel1_State_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel1.Variable.TCD.State+' / X';
                    }
                    

                }
                else{
                    getId('Channel1').innerHTML="Channel1<br/>not installed";
                }
                
                //Channel2
                if(res_objects.STRoot.Status.Channels.Channel2.Installed){
                    if(res_objects.STRoot.Status.Channels.Channel2.Enabled){
                        getId('Channel2').innerHTML="Channel2";

                        $(document).ready(function(){
                            $(".channel2").attr("class","action");
                            $("#Channel2").attr("class","set");
                            $("#set2").attr("class","set");
                            $("#act2").attr("class","set");
                        });
                    }
                    else{
                        getId('Channel2').innerHTML="Channel2<br/>disabled";
                    }
                    getId('Channel2_Description').innerHTML=res_objects.STRoot.Status.Channels.Channel2.Fixed.Description;
                    getId('Channel2_Carrier_gas').innerHTML=res_objects.STRoot.Status.Channels.Channel2.Fixed.Carrier_gas;
                    getId('Channel2_Serial_num').innerHTML=res_objects.STRoot.Status.Channels.Channel2.Fixed.Serial_num;


                    getId('Channel2_Column_temp_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel2.Variable.Column_temp;
                    getId('Channel2_Column_press_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel2.Variable.Column_press;
                    getId('Channel2_Injector_temp_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel2.Variable.Injector_temp;
                    getId('Channel2_Auto_zero_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel2.Variable.TCD.Auto_zero;
                    if (res_objects.STRoot.Status.Channels.Channel2.Variable.TCD.Calibrated) {
                        getId('Channel2_State_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel2.Variable.TCD.State+' / OK';
                    }
                    else {
                        getId('Channel2_State_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel2.Variable.TCD.State+' / X';
                    }

                }
                else{
                    getId('Channel2').innerHTML="Channel2<br/>not installed";
                }
                
                //Channel3
                if(res_objects.STRoot.Status.Channels.Channel3.Installed){
                    if(res_objects.STRoot.Status.Channels.Channel3.Enabled){
                        getId('Channel3').innerHTML="Channel3";

                        $(document).ready(function(){
                            $(".channel3").attr("class","action");
                            $("#Channel3").attr("class","set");
                            $("#set3").attr("class","set");
                            $("#act3").attr("class","set");
                        });
                    }
                    else{
                        getId('Channel3').innerHTML="Channel3<br/>disabled";
                    }
                    getId('Channel3_Description').innerHTML=res_objects.STRoot.Status.Channels.Channel3.Fixed.Description;
                    getId('Channel3_Carrier_gas').innerHTML=res_objects.STRoot.Status.Channels.Channel3.Fixed.Carrier_gas;
                    getId('Channel3_Serial_num').innerHTML=res_objects.STRoot.Status.Channels.Channel3.Fixed.Serial_num;


                    getId('Channel3_Column_temp_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel3.Variable.Column_temp;
                    getId('Channel3_Column_press_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel3.Variable.Column_press;
                    getId('Channel3_Injector_temp_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel3.Variable.Injector_temp;
                    getId('Channel3_Auto_zero_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel3.Variable.TCD.Auto_zero;
                    if (res_objects.STRoot.Status.Channels.Channel3.Variable.TCD.Calibrated) {
                        getId('Channel3_State_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel3.Variable.TCD.State+' / OK';
                    }
                    else {
                        getId('Channel3_State_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel3.Variable.TCD.State+' / X';
                    }
                    
                }
                else{
                    getId('Channel3').innerHTML="Channel3<br/>not installed";
                }
                
                //Channel4
                if(res_objects.STRoot.Status.Channels.Channel4.Installed){
                    if(res_objects.STRoot.Status.Channels.Channel4.Enabled){
                        getId('Channel4').innerHTML="Channel4";

                        $(document).ready(function(){
                            $(".channel4").attr("class","action");
                            $("#Channel4").attr("class","set");
                            $("#set4").attr("class","set");
                            $("#act4").attr("class","set");
                        });
                    }
                    else{
                        getId('Channel4').innerHTML="Channel4<br/>disabled";
                    }
                    getId('Channel4_Description').innerHTML=res_objects.STRoot.Status.Channels.Channel4.Fixed.Description;
                    getId('Channel4_Carrier_gas').innerHTML=res_objects.STRoot.Status.Channels.Channel4.Fixed.Carrier_gas;
                    getId('Channel4_Serial_num').innerHTML=res_objects.STRoot.Status.Channels.Channel4.Fixed.Serial_num;


                    getId('Channel4_Column_temp_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel4.Variable.Column_temp;
                    getId('Channel4_Column_press_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel4.Variable.Column_press;
                    getId('Channel4_Injector_temp_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel4.Variable.Injector_temp;
                    getId('Channel4_Auto_zero_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel4.Variable.TCD.Auto_zero;
                    if (res_objects.STRoot.Status.Channels.Channel4.Variable.TCD.Calibrated) {
                        getId('Channel4_State_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel4.Variable.TCD.State+' / OK';
                    }
                    else {
                        getId('Channel4_State_actual').innerHTML=res_objects.STRoot.Status.Channels.Channel4.Variable.TCD.State+' / X';
                    }
                    
                }
                else{
                    getId('Channel4').innerHTML="Channel4<br/>not installed";
                }
            
            }
        }

        function getId(id){
            return document.getElementById(id);
        }

        function time(){
            var now = new Date();

            var year=now.getFullYear();

            var month=now.getMonth()+1;

            var date=now.getDate();

            var hour=now.getHours();

            var minute=now.getMinutes();

            var second=now.getSeconds();

            currentTime=date+"-"+month+"-"+year+" "+hour+":"+minute+":"+second;

            return currentTime;
        }

        window.setInterval("updateData()",1000);
        