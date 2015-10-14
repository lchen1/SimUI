$(function(){	
	$('#calibration').datagrid({
		url:'../SampleData/calibration_example.json',
		width:400,
		height:400,
		fitColumns:true,
		singleSelect:true,
		//scrollbarSize:0,
		columns:[[
		          {
		        	  title:'ID',
		        	  field:'ID',		
		        	  width:20,
		          },
		          {
		        	  title:'Channel',
		        	  field:'Channel',		
		        	  width:50,
		          },
		          {
		        	  title:'Peak Names',
		        	  field:'PkName',		
		        	  width:100,
		          },
		          {
		        	  title:'Amount',
		        	  field:'Amount',	
		        	  width:50,
		        	  editor:{
		        		  type:'numberbox',
		        		  options:{
		        			  precision:1
		        			  }
		        	  }
		          },
		          {
		        	  title:'Response',
		        	  field:'Response',	
		        	  width:50,
		        	  formatter:function(value,row,index){
		        		  return value.toFixed(2);
		        	  }
		          },
		          {
		        	  title:'Retention',
		        	  field:'Ret_time',	
		        	  width:50,
		        	  formatter:function(value,row,index){
		        		  return value.toFixed(2);
		        	  }
		          },
		          ]],
	});	
	$('#save').linkbutton({
		onClick:function(){
				var info=$('#calibration').datagrid('getData');
				if(!confirm("A Calibration run will start.The result will replace current \n           calibration table with single level 1 data. \n                        Do you want to proceed?")){
					window.event.returnValue = false;
					//alert("no");
				}
				else{
					//alert("yes");
					for(var i=0;i<info.total;i++){
						$('#calibration').datagrid('endEdit',i);
						info.rows[i].Amount=parseInt(info.rows[i].Amount);
					}
					$.ajax({
						type:"POST",
						url:"download.php",
						data:{
							row:JSON.stringify(info,'',100),
						},		     
						success:function(data){
						}
					});
				}

				
	        		  //console.log(info);
	        		  //window.alert(info.total);
//	        		  $('#ff').form('submit',{
//	        			  url:"download.php",
//	        			  type:"json",
//	        			  onSubmit:function(param){
//	        				  param.row= JSON.stringify(info);
//	        			  },
//	        			  success:function(data){
//	        				  //alert(data);
//	        			  }
//	        		  })					
	      		  
	      		  }
	})
	$('#sb').switchbutton({
        checked: true,
        onText:'Edit',
        offText:'Revert',
        handleWidth:50,
        onChange: function(checked){
        	var info=$('#calibration').datagrid('getData');
        	if(checked==true){
        		$('#calibration').datagrid('load');	
        	}
        	else{
        		for(var i=0;i<info.total;i++){
        			$('#calibration').datagrid('beginEdit',i);
        		}
        	}
            //console.log(checked);
        }
    })

 //    $('#dia').dialog({
	// 	title:'calibrate',
	//     width:600,
	//     height:400,
	//     closed:true,
	//     //cache:false,
	//     buttons:[
	//              {
	//             	 text:'OK',
	//             	 handler:function(){
	//             		 var info=$('#calibration').datagrid('getData');
	//             		 $.ajax({
	//    	       			  type:"POST",
	//    	       			  url:"download.php",
	//    	       			  data:{
	//    	       				  row:JSON.stringify(info),
	//    	       			  },		     
	//    	       			  success:function(data){
	//            				  //alert(data);
	//    	       				  $('#dia').dialog('close');
	//    	       				  }
	//    	       			  });
	//             	 }
	//              },
	//              {
	//             	 text:'Cancel',
	//             	 handler:function(){
	//             		 $('#dia').dialog('close');
	//             		 $('#sb').switchbutton('uncheck');
	//             	 }
	//              }
	//              ]
	// });
});




//if (editRow != undefined) {
//	  $("#calibration").datagrid('endEdit', editRow);
//}
//if (editRow == undefined) {
//	  $("#calibration").datagrid('insertRow', {
//		  index: rowIndex,
//		  row: {
//			  type:'',
//			  repeat:'',
//			  stream:'',
//			  flush_time:'',
//		  }
//	  });
//	   
//	  $("#calibration").datagrid('beginEdit', 0);
//	  editRow = 0;
//}	
