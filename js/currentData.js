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
	function updateGraph1(){

		 // window.alert("ok");


		myXmlHttpRequest1=getXmlHttpObject();

		if (myXmlHttpRequest1) {

			// window.alert("ok");

			var url="chromatograph/channel1.php";
			// var data="data[]=Automation&data[]=GC&data[]=GC_Channel";
			var data="Automation"

			myXmlHttpRequest1.open("post",url,true);

			myXmlHttpRequest1.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

			myXmlHttpRequest1.onreadystatechange=graph1;

			myXmlHttpRequest1.send(data);
		}
	}
	function graph1(){
		if (myXmlHttpRequest1.readyState==4 && myXmlHttpRequest1.status==200) {
			//chuli
			//window.alert("ok");
			var res_objects1=[];
			res_objects1=eval("("+myXmlHttpRequest1.responseText+")");
			//window.alert(res_objects1[0]);
			}
		if (res_objects1=="error"){
			window.alert("The data is wrong");
		}
		else{
		var d1 = [];
		var length=res_objects1.length;
		for (i=0;i<length;i++) {
		    d1.push([0.01*i, res_objects1[i]/1000]);
		  }
		  new Dygraph(document.getElementById("graph1"),
	              d1,
	              {
	                labels: [ "seconds", "mv" ],
		  			title: "channel 1",
		  			legend:'always',
		  			width:500,
		  			height:200
	              });
		}
		window.setInterval("updateData1()",(10*length+1000));
		}
		//window.setInterval("updateData1()",5000);
		

	var myXmlHttpRequest2="";
	function updateGraph2(){

		 // window.alert("ok");


		myXmlHttpRequest2=getXmlHttpObject();

		if (myXmlHttpRequest2) {

			// window.alert("ok");

			var url="chromatograph/channel2.php";
			// var data="data[]=Automation&data[]=GC&data[]=GC_Channel";
			var data="Automation"

			myXmlHttpRequest2.open("post",url,true);

			myXmlHttpRequest2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

			myXmlHttpRequest2.onreadystatechange=graph2;

			myXmlHttpRequest2.send(data);
		}
	}
	function graph2(){
		if (myXmlHttpRequest2.readyState==4 && myXmlHttpRequest2.status==200) {
			//chuli
			//window.alert("ok");
			var res_objects2=[];
			res_objects2=eval("("+myXmlHttpRequest2.responseText+")");
			//window.alert(res_objects1[0]);
			}
		if (res_objects2=="error"){
			window.alert("The data is wrong");
		}
		else{
		var d2 = [];
		var length=res_objects2.length;
		for (i=0;i<length;i++) {
		    d2.push([0.01*i, res_objects2[i]/1000]);
		  }
		  new Dygraph(document.getElementById("graph2"),
	              d2,
	              {
	                labels: [ "seconds", "mv" ],
		  			title: "channel 2",
		  			legend:'always',
		  			width:500,
		  			height:200
	              });
		}
		window.setTimeout("updateData2()",(10*length+1000));
		}


	var myXmlHttpRequest3="";
	function updateGraph3(){

		 // window.alert("ok");


		myXmlHttpRequest3=getXmlHttpObject();

		if (myXmlHttpRequest3) {

			// window.alert("ok");

			var url="chromatograph/channel3.php";
			// var data="data[]=Automation&data[]=GC&data[]=GC_Channel";
			var data="Automation"

			myXmlHttpRequest3.open("post",url,true);

			myXmlHttpRequest3.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

			myXmlHttpRequest3.onreadystatechange=graph3;

			myXmlHttpRequest3.send(data);
		}
	}
	function graph3(){
		if (myXmlHttpRequest3.readyState==4 && myXmlHttpRequest3.status==200) {
			//chuli
			//window.alert("ok");
			var res_objects3=[];
			res_objects3=eval("("+myXmlHttpRequest3.responseText+")");
			//window.alert(res_objects1[0]);
			}
		if (res_objects3=="error"){
			window.alert("The data is wrong");
		}
		else{
		var d3 = [];
		var length=res_objects3.length;
		for (i=0;i<length;i++) {
		    d3.push([0.01*i, res_objects3[i]/1000]);
		  }
		  new Dygraph(document.getElementById("graph3"),
	              d3,
	              {
	                labels: [ "seconds", "mv" ],
		  			title: "channel 3",
		  			legend:'always',
		  			width:500,
		  			height:200
	              });
		}
		window.setTimeout("updateData3()",(10*length+1000));
		}
		
		//window.setTimeout("updateData3()",5000);

	var myXmlHttpRequest4="";
	function updateGraph4(){

		 // window.alert("ok");


		myXmlHttpRequest4=getXmlHttpObject();

		if (myXmlHttpRequest4) {

			// window.alert("ok");

			var url="chromatograph/channel4.php";
			// var data="data[]=Automation&data[]=GC&data[]=GC_Channel";
			var data="Automation"

			myXmlHttpRequest4.open("post",url,true);

			myXmlHttpRequest4.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

			myXmlHttpRequest4.onreadystatechange=graph4;

			myXmlHttpRequest4.send(data);
		}
	}
	function graph4(){
		if (myXmlHttpRequest4.readyState==4 && myXmlHttpRequest4.status==200) {
			//chuli
			//window.alert("ok");
			var res_objects4=[];
			res_objects4=eval("("+myXmlHttpRequest4.responseText+")");
			//window.alert(res_objects1[0]);
			}
		if (res_objects4=="error"){
			window.alert("The data is wrong");
		}
		else{
		var d4 = [];
		var length=res_objects4.length;
		//window.alert(length);
		for (i=0;i<length;i++) {
		    d4.push([0.01*i, res_objects4[i]/1000]);
		  }
		  new Dygraph(document.getElementById("graph4"),
	              d4,
	              {
	                labels: [ "seconds", "mv" ],
		  			title: "channel 4",
		  			legend:'always',
		  			width:500,
		  			height:200
	              });
		}
		window.setInterval("updateData4()",(10*length+1000));
		}
		//window.setInterval("updateData4()",5000);
		updateGraph1();
		updateGraph2();
		updateGraph3();
		updateGraph4();



var myXmlHttpRequest="";

    function updateData(){

        myXmlHttpRequest=getXmlHttpObject();

        if (myXmlHttpRequest) {

            var url="reportDataProcess.php";
            var data="path";
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
