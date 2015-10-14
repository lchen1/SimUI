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
        var mydata="status";
        var data="userdata="+mydata;

        myXmlHttpRequest.open("post",url,true);
        myXmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        myXmlHttpRequest.onreadystatechange=chuli;
        myXmlHttpRequest.send(data);
    }
}

function chuli(){
    if (myXmlHttpRequest.readyState==4 && myXmlHttpRequest.status==200) {
        // window.alert("ok");
        var res_objects=eval("("+myXmlHttpRequest.responseText+")");
        // window.alert(res_objects);
        var status={};

        status.GC_time=res_objects.GC_time;
        status.Application=res_objects.Application;
        status.Host=res_objects.Host;
        status.Total_run_time=res_objects.Total_run_time;
        status.Run_time=res_objects.Run_time;
        status.Error_code=res_objects.Error_code;
        status.Error_str=res_objects.Error_str;
        status.Curr_stream=res_objects.Curr_stream;
        status.Last_counter=res_objects.Last_counter;
        status.Continuous=res_objects.Continuous;
        status.Seq_line=res_objects.Seq_line;
        status.Line_replicate=res_objects.Line_replicate;
        status.Seq_replicate=res_objects.Seq_replicate;
        status.Run_type=res_objects.Run_type;
        status.GC_State=res_objects.GC_state;
        status.Ext_ready_in=res_objects.Ext_ready_in;
        status.Auto_state=res_objects.Auto_state;
        status.Service_switch=res_objects.Service_switch;
        status.Ambient_press=res_objects.Ambient_press;
        status.Ambient_temp=res_objects.Ambient_temp;

        status.Sample_line_temp_Setpoint=res_objects.Sample_line_temp.Setpoint;
        status.Sample_line_temp_Actual=res_objects.Sample_line_temp.Actual;

        status.Channel1_Column_temp_Setpoint=res_objects.Channel1.Column_temp.Setpoint;
        status.Channel1_Column_temp_Actual=res_objects.Channel1.Column_temp.Actual;
        status.Channel1_Column_press_Setpoint=res_objects.Channel1.Column_press.Setpoint;
        status.Channel1_Column_press_Actual=res_objects.Channel1.Column_press.Actual;
        status.Channel1_Injector_temp_Setpoint=res_objects.Channel1.Injector_temp.Setpoint;
        status.Channel1_Injector_temp_Actual=res_objects.Channel1.Injector_temp.Actual;
        status.Channel1_TCD_Auto_zero=res_objects.Channel1.TCD.Auto_zero;
        status.Channel1_TCD_Auto_State=res_objects.Channel1.TCD.State;
        status.Channel1_TCD_Calibrated=res_objects.Channel1.TCD.Calibration;

        // status.Channel2_Column_temp_Setpoint=res_objects.Channel2.Column_temp.Setpoint;
        // status.Channel2_Column_temp_Actual=res_objects.Channel2.Column_temp.Actual;
        // status.Channel2_Column_press_Setpoint=res_objects.Channel2.Column_press.Setpoint;
        // status.Channel2_Column_press_Actual=res_objects.Channel2.Column_press.Actual;
        // status.Channel2_Injector_temp_Setpoint=res_objects.Channel2.Injector_temp.Setpoint;
        // status.Channel2_Injector_temp_Actual=res_objects.Channel2.Injector_temp.Actual;
        // status.Channel2_TCD_Auto_zero=res_objects.Channel2.TCD.Auto_zero;
        // status.Channel2_TCD_Auto_State=res_objects.Channel2.TCD.State;
        // status.Channel2_TCD_Calibrated=res_objects.Channel2.TCD.Calibration;

        // status.Channel3_Column_temp_Setpoint=res_objects.Channel3.Column_temp.Setpoint;
        // status.Channel3_Column_temp_Actual=res_objects.Channel3.Column_temp.Actual;
        // status.Channel3_Column_press_Setpoint=res_objects.Channel3.Column_press.Setpoint;
        // status.Channel3_Column_press_Actual=res_objects.Channel3.Column_press.Actual;
        // status.Channel3_Injector_temp_Setpoint=res_objects.Channel3.Injector_temp.Setpoint;
        // status.Channel3_Injector_temp_Actual=res_objects.Channel3.Injector_temp.Actual;
        // status.Channel3_TCD_Auto_zero=res_objects.Channel3.TCD.Auto_zero;
        // status.Channel3_TCD_Auto_State=res_objects.Channel3.TCD.State;
        // status.Channel3_TCD_Calibrated=res_objects.Channel3.TCD.Calibration;

        // status.Channel4_Column_temp_Setpoint=res_objects.Channel4.Column_temp.Setpoint;
        // status.Channel4_Column_temp_Actual=res_objects.Channel4.Column_temp.Actual;
        // status.Channel4_Column_press_Setpoint=res_objects.Channel4.Column_press.Setpoint;
        // status.Channel4_Column_press_Actual=res_objects.Channel4.Column_press.Actual;
        // status.Channel4_Injector_temp_Setpoint=res_objects.Channel4.Injector_temp.Setpoint;
        // status.Channel4_Injector_temp_Actual=res_objects.Channel4.Injector_temp.Actual;
        // status.Channel4_TCD_Auto_zero=res_objects.Channel4.TCD.Auto_zero;
        // status.Channel4_TCD_Auto_State=res_objects.Channel4.TCD.State;
        // status.Channel4_TCD_Calibrated=res_objects.Channel4.TCD.Calibration;

        sessionStorage.setItem('status_info',JSON.stringify(status));

        var data = JSON.parse(sessionStorage.getItem('status_info'));

        //GC Status
        // getId('sol_name').innerHTML=res_objects.Application;
        // getId('GC_state').innerHTML=res_objects.GC_state;

        getId('sol_name').innerHTML=data.Application;
        getId('GC_state').innerHTML=data.GC_State;
        if(data.GC_State=="Ready"){
            $(document).ready(function(){
                $("#GC_state").attr("class","w3-center w3-light-green");
            });
        }
        else if(data.GC_State=="Not Ready"){
            $(document).ready(function(){
                $("#GC_state").attr("class","w3-center w3-yellow");
            });
        }
        else if(data.GC_State.indexOf("Error") >= 0){
            $(document).ready(function(){
                $("#GC_state").attr("class","w3-center w3-red");
            });
        }
        else if(data.GC_State.indexOf("Running") >= 0){
            $(document).ready(function(){
                $("#GC_state").attr("class","w3-center w3-cyan");
            }); 
        }
        else{
            $(document).ready(function(){
                $("#GC_state").attr("class","w3-center w3-light-green");
            });
        }
        if(!data.Continuous){
            getId('run_num').innerHTML=data.Seq_line+'-'+data.Line_replicate;
        }
        else{
             getId('run_num').innerHTML= "&infin;";
        }
        getId('left_time').innerHTML=data.Total_run_time - data.Run_time;
        // getId('Error_code').innerHTML=res_objects.STRoot.Status.Error_code;
    }
}

function getId(id){
    return document.getElementById(id);
}

window.setTimeout("updateData()",100);
window.setInterval("updateData()",1500);

/*
function run(){
    if(document.getElementById("hidden_div").style.display=='none'){
        document.getElementById("hidden_div").style.display='block';}
    $("#btn").attr("disabled","true");
}

function stop(event){
    var event = event || window.event;
    if(!confirm("Note:the stop action will abort the single run immediately,\n  or stop the sequence runs after current run completes.\n                     Are you sure to proceed?")){ 
        event.returnValue = false; 
    } 

    $("#img1").attr("src","images/run_green.png")
        $("#img2").attr("src","images/stop_gray.png")

        $("#btn").removeAttr("disabled");
    $("#button").attr("disabled","true");
}

function mySubmit(){
    document.getElementById("myForm").submit();
    $("#button").removeAttr("disabled");

    $("#img1").attr("src","images/run_gray.png")
        $("#img2").attr("src","images/stop_red.png")

        if(document.getElementById("hidden_div").style.display=='block')
            document.getElementById("hidden_div").style.display='none';
}

function closeWin(){
    if(document.getElementById("hidden_div").style.display=='block')
        document.getElementById("hidden_div").style.display='none';
    $("#btn").removeAttr("disabled");
}
*/
