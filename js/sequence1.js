$(function(){
	var process = [
	               {processid:'Blank',name:'Blank'},
	               {processid:'Analysis',name:'Analysis'},
	    		   {processid:'Calibration',name:'Calibration'},
	    		   {processid:'Verification',name:'Verification'}
	    		   ];
	var editRow = undefined;
	$('#sequence').datagrid({
		url:'../SampleData/sequence_example.json',
		width:400,
		height:300,
		fitColumns:true,
		singleSelect:true,
		scrollbarSize:0,
		//rownumbers:true,
        //rowStyler: function(index,row){
        //    if (row.Flush>10){
        //        return 'background-color:#6293BB;color:#fff;';
        //    }
        //},
		columns:[[
		          {
		        	  title:'Type',
		        	  field:'type',		
		        	  width:60,
		        	  editor:{
		        		  type:'combobox',
		        		  options:{
		        			  valueField:"processid",
		        			  textField:"name",
		        			  data:process,
		        			  editable:false
		        			  //required:true		        			  
		        		  }
		        	  }
		          },
		          {
		        	  title:'Repeat',
		        	  field:'Repeat',	
		        	  width:40,
		        	  editor:'numberbox'
		          },
		          {
		        	  title:'Stream',
		        	  field:'Stream',	
		        	  width:20,
		        	  editor:'numberbox'
		          },
		          {
		        	  title:'Flush time(s)',
		        	  field:'Flush',
		        	  width:30,
		        	  editor:{
		        		  type:'numberbox',
		        		  options:{
		        			  precision:1
		        			  }
		        	  }
		          },
		          ]],
		onDblClickRow:function(rowIndex,rowData){
				$('#sequence').datagrid('beginEdit', rowIndex);
	    		editRow = rowIndex;
    	},	
        onClickRow:function(rowIndex,rowData){
        		$("#sequence").datagrid('endEdit', editRow);
            	$("#sequence").datagrid('cancelEdit', editRow);
        }
	});
	
	
	$('#refresh').linkbutton({
        onClick:function(){
            $('#sequence').datagrid('load');	      		  
        }
    });
	$('#download').linkbutton({
		onClick:function(){
			$("#sequence").datagrid('endEdit', editRow);
			var info=$('#sequence').datagrid('getData');
  		  	//console.log(info);
  		  	var v = $('#nb').numberbox('getValue');
  		  	info.Table_repeat=parseInt(v);
  		  	//alert(info.total);
  		  	for(var i=0;i<info.total;i++){
  		  		var t;
  		  		if(info.rows[i].type==''||info.rows[i].Repeat==''||info.rows[i].Stream==''||info.rows[i].Flush==''){
  		  			alert('error');
  		  			t='error';
  		  			break;
  		  		}
  		  		info.rows[i].Repeat=parseInt(info.rows[i].Repeat);
  		  		info.rows[i].Stream=parseInt(info.rows[i].Stream);
  		  		info.rows[i].Flush=parseInt(info.rows[i].Flush);
  		  		t='ok';
  		  	}
  		  	if(t=='ok'){
  		  		$.ajax({
  		  			type:"POST",
  		  			url:"download.php",
  		  			data:{
  		  				row:JSON.stringify(info,'',100),
  		  			},		     
  		  			success:function(data){
  		  				//alert(data);
  		  			}
  		  		});	  	
  		  	}
  		  		  	    		  
		}
	});
	$('#add').linkbutton({
		onClick:function(){
			var row = $('#sequence').datagrid('getSelected');
          //alert(row);
  		  	var index = $('#sequence').datagrid('getRowIndex', row);
  		  	$('#sequence').datagrid('insertRow', {
  		  		index:index+1,
  		  		row:{
  		  			type:'',
  		  			Repeat:'',
  		  			Stream:'',
  		  			Flush:'',
  		  		},		        		 
  		  	});	      		  
		}
	});
	$('#remove').linkbutton({
		onClick:function(){
			var row = $('#sequence').datagrid('getSelected');
  		  	if (row){
  		  		var index = $('#sequence').datagrid('getRowIndex', row);
  		  		$('#sequence').datagrid('deleteRow', index);
  		  	}      		  
		}
	});
	//var info=$('#sequence').datagrid('getData');
	//alert(info.tablerepeat);
	$.getJSON("../SampleData/sequence_example.json",function(data){
		var index=data.Table_repeat;
		var con=data.continuous;
		$('#nb').numberbox({
		    min:0,
		    //precision:2
		    value:index
		});	
		//alert(con);
		if(con==true){
			$('#cb').attr("checked","checked");
			$('#cb').click(function(){
			})
		}
	});
});

//if (editRow != undefined) {
//	  $("#sequence").datagrid('endEdit', editRow);
//}
//if (editRow == undefined) {
//	  $("#sequence").datagrid('insertRow', {
//		  index: rowIndex,
//		  row: {
//			  type:'',
//			  repeat:'',
//			  stream:'',
//			  flush_time:'',
//		  }
//	  });
//	   
//	  $("#sequence").datagrid('beginEdit', 0);
//	  editRow = 0;
//}	

