function getXmlHttpObject(){
    var xmlHttpRequest;
    if (window.ActiveXObject) {
        xmlHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }else {
        xmlHttpRequest=new XMLHttpRequest();
    }
    return xmlHttpRequest;
}

var myConfigXmlHttpRequest="";

function updateConfigData(){
    myConfigXmlHttpRequest=getXmlHttpObject();
    if (myConfigXmlHttpRequest) {
        var url="configProcess.php";
        // var mydata="config";
        var data="config";
        // window.alert(data);

        myConfigXmlHttpRequest.open("post",url,true);
        myConfigXmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        myConfigXmlHttpRequest.onreadystatechange=chuli_config;
        myConfigXmlHttpRequest.send(data);
    }
}

function chuli_config(){
    if (myConfigXmlHttpRequest.readyState==4 && myConfigXmlHttpRequest.status==200) {
        // window.alert("ok");
        var config_objects= JSON.parse(myConfigXmlHttpRequest.responseText);
        // window.alert(config_objects);

        var config={};
        config.Inst_name=config_objects.Inst_name;
        config.Site_info=config_objects.Site_info;
        config.Inst_serial=config_objects.Inst_serial;
        config.PRO=config_objects.PRO;
        config.Stream_configured=config_objects.Stream_configured;
        config.Stream_max=config_objects.Stream_max;

        //Channel1
        config.Channel1_Installed=config_objects.Channel1.Installed;
        config.Channel1_Disabled=config_objects.Channel1.Disabled;
        config.Channel1_Serial=config_objects.Channel1.Serial;
        config.Channel1_Description=config_objects.Channel1.Description;
        config.Channel1_Gas=config_objects.Channel1.Gas;
        //Channel2
        config.Channel2_Installed=config_objects.Channel2.Installed;
        config.Channel2_Disabled=config_objects.Channel2.Disabled;
        config.Channel2_Serial=config_objects.Channel2.Serial;
        config.Channel2_Description=config_objects.Channel2.Description;
        config.Channel2_Gas=config_objects.Channel2.Gas;
        //Channel1
        config.Channel3_Installed=config_objects.Channel3.Installed;
        config.Channel3_Disabled=config_objects.Channel3.Disabled;
        config.Channel3_Serial=config_objects.Channel3.Serial;
        config.Channel3_Description=config_objects.Channel3.Description;
        config.Channel3_Gas=config_objects.Channel3.Gas;
        //Channel1
        config.Channel4_Installed=config_objects.Channel4.Installed;
        config.Channel4_Disabled=config_objects.Channel4.Disabled;
        config.Channel4_Serial=config_objects.Channel4.Serial;
        config.Channel4_Description=config_objects.Channel4.Description;
        config.Channel4_Gas=config_objects.Channel4.Gas;

        sessionStorage.setItem('config_info',JSON.stringify(config));

        // var data = JSON.parse(sessionStorage.getItem('config_info'));
        // window.alert(data);

        if (!config.Stream_configured)
        {
            $('#div_stream').hide();
            //$('#menu_sequence').hide();
        }
    }
}

window.setTimeout("updateConfigData()",1000);

