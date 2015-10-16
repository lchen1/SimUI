var editRow=-1;
var selectRow=-1;

$(function(){
    var process = [
    {processid:'Blank',name:'Blank'},
    {processid:'Analysis',name:'Analysis'},
    {processid:'Calibration',name:'Calibration'},
    {processid:'Verification',name:'Verification'}
    ];

    $('#sequence').datagrid({
        url:'upload.php',
        width:400,
        height:300,
        fitColumns:true,
        singleSelect:true,
        scrollbarSize:0,
        //rownumbers:true,
        //		rowStyler: function(index,row){
        //			if (row.Flush_time>10){
        //				return 'background-color:#6293BB;color:#fff;';
        //			}
        //		},
        columns:[[
    {
        title:'Type',
        field:'Type',		
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
        title:'Flush time',
        field:'Flush_time',
        width:30,
        editor:{
            type:'numberbox',
            options:{
                precision:1
            }
        }
    },
    ]],
    /*onDblClickRow:function(rowIndex,rowData){
       $('#sequence').datagrid('beginEdit', rowIndex);
       editRow = rowIndex;
    },*/	
    onLoadSuccess:function(data)
    {
        var index=data.Table_repeat;
        var con=data.Continuous;
        $('#nb').numberbox({
            min:1,
            value:index
        });	
        if(con){
            $('#cb').prop("checked", true);
            $('#seq').hide();
        }
        else{
            $('#cb').prop("checked", false);
            $('#seq').show();
        }
    },
    onClickRow:function(rowIndex,rowData){
        if (selectRow == rowIndex)
        { 
            if (editRow != rowIndex) //selected and not in edit
            {
                $('#sequence').datagrid('beginEdit', rowIndex);
                editRow = rowIndex;
            }
            // selected and in edit. do nothing
        }
        else
        {
            if (rowIndex != editRow) // not selected and not in edit
            {
                $("#sequence").datagrid('endEdit', editRow);
                $("#sequence").datagrid('cancelEdit', editRow);
                editRow = -1;
            }
            // not selected and in edit. do nothing

        }
        selectRow = rowIndex; // alwasy update the selected index
    }
    });


    $('#refresh').linkbutton({
        onClick:function(){
            $('#sequence').datagrid('load');	      		  
        }
    });

    $('#download').linkbutton({
        onClick:function(){
        if(!confirm("Do you want to apply the change?")) 
        {
            window.event.returnValue = false;
        }
        else
        {
            $("#sequence").datagrid('endEdit', editRow);
            var info=$('#sequence').datagrid('getData');
            var v = $('#nb').numberbox('getValue');
            info.Table_repeat=parseInt(v);

            var isvalid;
            for(var i=0;i<info.total;i++){
                info.rows[i].Repeat = parseInt(info.rows[i].Repeat);
                info.rows[i].Stream = parseInt(info.rows[i].Stream);
                info.rows[i].Flush_time = parseFloat(info.rows[i].Flush_time);
                if(info.rows[i].Type==''||
                    info.rows[i].Repeat == NaN || info.rows[i].Repeat < 0 || info.rows[i].Repeat > 99 || 
                    info.rows[i].Stream == NaN || info.rows[i].Stream < 0 || info.rows[i].Stream > 99 || 
                    info.rows[i].Flush_time == NaN || info.rows[i].Flush_time < 0 || info.rows[i].Flush_time > 600 )
                {
                    alert('Unable to download!\nThis table contains invalid items.');
                    isvalid = false;
                    break;
                }
                isvalid = true;
            }
            if( isvalid ) {
                $.ajax({
                    type:"POST",
                    url:"download.php",
                    data:{
                        row:JSON.stringify(info,'',100),
                    },		     
                    success:function(data){
                        console.log(data);
                    }
                });	  	
            }
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
                    Type:"Analysis",
                Repeat: 1,
                Stream: 1,
                Flush_time: 20.0,
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

    $('#cb').change(function () {
        $('#sequence').datagrid('getData').Continuous = !$('#sequence').datagrid('getData').Continuous;
        $('#seq').toggle();
    });
});

