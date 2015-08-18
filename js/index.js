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

                var url="indexProcess.php";

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

                // getId('Inst_name').innerHTML=res_objects.STRoot.General.Inst_name;
                // getId('Size_info').innerHTML=res_objects.STRoot.General.Size_info;
                // getId('Inst_serial').innerHTML=res_objects.STRoot.General.Inst_serial;

                //GC Status
                getId('GC_state').innerHTML=res_objects.STRoot.Status.GC_state;
                getId('Error_code').innerHTML=res_objects.STRoot.Status.Error_code;
            }
        }

        function getId(id){
            return document.getElementById(id);
        }

        window.setInterval("updateData()",1000);
        
        function switch_page1(){
            document.getElementById('iframe').src="workspace/status.html";
        }

        function switch_page2(){
            document.getElementById('iframe').src="workspace/data/data.php";
        }

        function switch_page3(){
            document.getElementById('iframe').src="operation/solution.php";
        }
        function switch_page4(){
            document.getElementById('iframe').src="operation/calibration.html";
        }