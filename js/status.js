function fixed_info(){
    var data=JSON.parse(sessionStorage.getItem('config_info'));

    getId('Inst_name').innerHTML=data.Inst_name;
    getId('Site_info').innerHTML=data.Site_info;
    getId('Inst_serial').innerHTML=data.Inst_serial;

    //Channel1
    if(data.Channel1_Installed){
        if(!data.Channel1_Disabled){
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
        getId('Channel1_Description').innerHTML=data.Channel1_Description;//Undefined
        getId('Channel1_Carrier_gas').innerHTML=data.Channel1_Gas;
        getId('Channel1_Serial_num').innerHTML=data.Channel1_Serial;

    }
    else{
        getId('Channel1').innerHTML="Channel1<br/>not installed";
    }

    //Channel2
    if(data.Channel2_Installed){
        if(!data.Channel2_Disabled){
            getId('Channel2').innerHTML="Channel1";

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
        getId('Channel2_Description').innerHTML=data.Channel1_Description;//Undefined
        getId('Channel2_Carrier_gas').innerHTML=data.Channel1_Gas;
        getId('Channel2_Serial_num').innerHTML=data.Channel1_Serial;

    }
    else{
        getId('Channel2').innerHTML="Channel2<br/>not installed";
    }

    //Channel3
    if(data.Channel3_Installed){
        if(!data.Channel3_Disabled){
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
        getId('Channel3_Description').innerHTML=data.Channel3_Description;//Undefined
        getId('Channel3_Carrier_gas').innerHTML=data.Channel3_Gas;
        getId('Channel3_Serial_num').innerHTML=data.Channel3_Serial;

    }
    else{
        getId('Channel3').innerHTML="Channel3<br/>not installed";
    }

    //Channel4
    if(data.Channel4_Installed){
        if(!data.Channel4_Disabled){
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
        getId('Channel4_Description').innerHTML=data.Channel4_Description;//Undefined
        getId('Channel4_Carrier_gas').innerHTML=data.Channel4_Gas;
        getId('Channel4_Serial_num').innerHTML=data.Channel4_Serial;

    }
    else{
        getId('Channel4').innerHTML="Channel4<br/>not installed";
    }

}


function changeable_info(){

    var config_data=JSON.parse(sessionStorage.getItem('config_info'));
    var status_data=JSON.parse(sessionStorage.getItem('status_info'));

    if(config_data.Channel1_Installed){

        getId('Channel1_Column_temp_setpoint').innerHTML=status_data.Channel1_Column_temp_Setpoint.toFixed(1);
        getId('Channel1_Column_temp_actual').innerHTML=status_data.Channel1_Column_temp_Actual.toFixed(2);
        getId('Channel1_Injector_temp_setpoint').innerHTML=status_data.Channel1_Injector_temp_Setpoint.toFixed(1);
        getId('Channel1_Injector_temp_actual').innerHTML=status_data.Channel1_Injector_temp_Actual.toFixed(2);
        getId('Channel1_Column_press_setpoint').innerHTML=(status_data.Channel1_Column_press_Setpoint/1000.0).toFixed(1);
        getId('Channel1_Column_press_actual').innerHTML=(status_data.Channel1_Column_press_Actual/1000.0).toFixed(2);
        getId('Channel1_Auto_zero_setpoint').innerHTML=status_data.Channel1_TCD_Auto_zero; 
        if (status_data.Channel1_TCD_Calibrated) {
            getId('Channel1_State_actual').innerHTML=status_data.Channel1_TCD_Auto_State+' / OK';
        }
        else {
            getId('Channel1_State_actual').innerHTML=status_data.Channel1_TCD_Auto_State+' / X';
        }
    }

    if(config_data.Channel2_Installed){

        getId('Channel2_Column_temp_setpoint').innerHTML=status_data.Channel2_Column_temp_Setpoint.toFixed(1);
        getId('Channel2_Column_temp_actual').innerHTML=status_data.Channel2_Column_temp_Actual.toFixed(2);
        getId('Channel2_Injector_temp_setpoint').innerHTML=status_data.Channel2_Injector_temp_Setpoint.toFixed(1);
        getId('Channel2_Injector_temp_actual').innerHTML=status_data.Channel2_Injector_temp_Actual.toFixed(2);
        getId('Channel2_Column_press_setpoint').innerHTML=(status_data.Channel2_Column_press_Setpoint/1000.0).toFixed(1);
        getId('Channel2_Column_press_actual').innerHTML=(status_data.Channel2_Column_press_Actual/1000.0).toFixed(2);
        getId('Channel2_Auto_zero_setpoint').innerHTML=status_data.Channel2_TCD_Auto_zero; 
        if (status_data.Channel2_TCD_Calibrated) {
            getId('Channel2_State_actual').innerHTML=status_data.Channel2_TCD_Auto_State+' / OK';
        }
        else {
            getId('Channel2_State_actual').innerHTML=status_data.Channel2_TCD_Auto_State+' / X';
        }
    }

    if(config_data.Channel3_Installed){

        getId('Channel3_Column_temp_setpoint').innerHTML=status_data.Channel3_Column_temp_Setpoint.toFixed(1);
        getId('Channel3_Column_temp_actual').innerHTML=status_data.Channel3_Column_temp_Actual.toFixed(2);
        getId('Channel3_Column_press_setpoint').innerHTML=status_data.Channel3_Column_press_Setpoint.toFixed(1);
        getId('Channel3_Column_press_actual').innerHTML=status_data.Channel3_Column_press_Actual.toFixed(2);
        getId('Channel3_Injector_temp_setpoint').innerHTML=(status_data.Channel3_Injector_temp_Setpoint/1000.0).toFixed(1);
        getId('Channel3_Injector_temp_actual').innerHTML=(status_data.Channel3_Injector_temp_Actual/1000.0).toFixed(2);
        getId('Channel3_Auto_zero_setpoint').innerHTML=status_data.Channel3_TCD_Auto_zero; 
        if (status_data.Channel3_TCD_Calibrated) {
            getId('Channel3_State_actual').innerHTML=status_data.Channel3_TCD_Auto_State+' / OK';
        }
        else {
            getId('Channel3_State_actual').innerHTML=status_data.Channel3_TCD_Auto_State+' / X';
        }
    }

    if(config_data.Channel4_Installed){

        getId('Channel4_Column_temp_setpoint').innerHTML=status_data.Channel4_Column_temp_Setpoint.toFixed(1);
        getId('Channel4_Column_temp_actual').innerHTML=status_data.Channel4_Column_temp_Actual.toFixed(2);
        getId('Channel4_Column_press_setpoint').innerHTML=status_data.Channel4_Column_press_Setpoint.toFixed(1);
        getId('Channel4_Column_press_actual').innerHTML=status_data.Channel4_Column_press_Actual.toFixed(2);
        getId('Channel4_Injector_temp_setpoint').innerHTML=(status_data.Channel4_Injector_temp_Setpoint/1000.0).toFixed(1);
        getId('Channel4_Injector_temp_actual').innerHTML=(status_data.Channel4_Injector_temp_Actual/1000.0).toFixed(2);
        getId('Channel4_Auto_zero_setpoint').innerHTML=status_data.Channel4_TCD_Auto_zero; 
        if (status_data.Channel4_TCD_Calibrated) {
            getId('Channel4_State_actual').innerHTML=status_data.Channel4_TCD_Auto_State+' / OK';
        }
        else {
            getId('Channel4_State_actual').innerHTML=status_data.Channel4_TCD_Auto_State+' / X';
        }
    }

    getId('Sample_line_temp_setpoint').innerHTML=status_data.Sample_line_temp_Setpoint;
    getId('Sample_line_temp_actual').innerHTML=status_data.Sample_line_temp_Actual;
    getId('Cabinet_temp').innerHTML=status_data.Ambient_temp.toFixed(1);
    getId('Cabinet_press').innerHTML=status_data.Ambient_press.toFixed(1);

    getId('GC_time').innerHTML=status_data.GC_time;
    //GC Status

    getId('Automation_state').innerHTML=status_data.Auto_state;//Undefined
    getId('Service_switch').innerHTML=status_data.Service_switch;
    getId('GC_state').innerHTML=status_data.GC_State;
    getId('Curr_stream').innerHTML=status_data.Curr_stream;  
    getId('GC_status').innerHTML=status_data.Error_str;//Undefined
    if (status_data.Error_code > 10000)
        $("#GC_status").attr("style","color:red");
    else
        $("#GC_status").attr("style","");
    getId('Ext_ready_in').innerHTML=status_data.Ext_ready_in;
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

window.setTimeout("fixed_info()",1000);
// window.setTimeout("changeable_info()",4000);
window.setInterval("changeable_info()",1000);

