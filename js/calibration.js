var editRow=-1;
var selectRow=-1;

$(function(){	
    $('#calibration').datagrid({
        url:'upload.php',
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
        title:'Level Amt',
        field:'Level_amt',	
        width:60,
        editor:{
            type:'numberbox',
            options:{
                precision:1
            }
        }
    },
    {
        title:'Amount',
        field:'Amount',	
        width:50,
        formatter:function(value,row,index){
            return value.toFixed(2);
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
    /*onDblClickRow:function(rowIndex,rowData){
        $('#calibration').datagrid('beginEdit', rowIndex);
        editRow = rowIndex;
    },*/	
    onClickRow:function(rowIndex,rowData){
        if (selectRow == rowIndex)
        { 
            if (editRow != rowIndex) //selected and not in edit
            {
                $('#calibration').datagrid('beginEdit', rowIndex);
                editRow = rowIndex;
            }
            // selected and in edit. do nothing
        }
        else
        {
            if (rowIndex != editRow) // not selected and not in edit
            {
                $("#calibration").datagrid('endEdit', editRow);
                $("#calibration").datagrid('cancelEdit', editRow);
                editRow = -1;
            }
            // not selected and in edit. do nothing

        }
        selectRow = rowIndex; // alwasy update the selected index
 
    }
    });	

    $('#save').linkbutton({
        onClick:function(){
            var info=$('#calibration').datagrid('getData');
            if(!confirm("Do you want to change the calibration settings?"))
            {
                window.event.returnValue = false;
            }
            else
            {
                for(var i=0;i<info.total;i++){
                    $('#calibration').datagrid('endEdit',i);
                    info.rows[i].Level_amt = parseFloat(info.rows[i].Level_amt);
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
        }
    });

    $('#refresh').linkbutton({
        onClick:function(){
            $('#calibration').datagrid('load');	      		  
        }
    });

});

