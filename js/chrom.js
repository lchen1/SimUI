function getXmlHttpObject(){
    var xmlHttpRequest;
    if (window.ActiveXObject) {
        xmlHttpRequest=new ActiveXObject("Microsoft.XMLHTTP");
    }else {
        xmlHttpRequest=new XMLHttpRequest();
    }
    return xmlHttpRequest;
}

var myChromRequest="";
function getChromData(dir, tt){
    myChromRequest = getXmlHttpObject();
    if (myChromRequest) {
        var url="readchrom.php";
        var data="dir=" + dir + "&target=" + tt;

        myChromRequest.open("post", url, true);
        myChromRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        myChromRequest.onreadystatechange=plotGraphs;
        myChromRequest.send(data);
    }
}

var myReportRequest="";
function getReport(dir, tt){
    myReportRequest = getXmlHttpObject();
    if (myReportRequest) {
        var url="readreport.php";
        var rdata="dir=" + dir + "&target=" + tt;

        myReportRequest.open("post", url, true);
        myReportRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        myReportRequest.onreadystatechange=printReport;
        myReportRequest.send(rdata);
    }
}

function show_list()
{
    $('#dcontent').hide();
    $('#dlist').show('slow');
}

function show_detail(dir, target)
{
    console.log(dir + target);
    getChromData(dir, target);
    getReport(dir, target);
    $('#dlist').hide();
    $('#dcontent').show('slow');
}

function plotGraphs() {
    if (myChromRequest.readyState == 4 && myChromRequest.status == 200) {
          var chrom_object=[];

          $('#graphs').hide();
          chrom_object = JSON.parse(myChromRequest.responseText);
          if (chrom_object == "error") {
              console.log("invalid data!");
          }
          else if (chrom_object  == "No_data") {
              console.log("no data found");
          }
          else
          {
              $('#graphs').show();

              if ( chrom_object["len4"] > 0 )
              {
                  $('#sw4').show();
                  $('#sw4').click();
                  // channel 4
                  var d4 = [];
                  //console.log(chrom_object["len1"]);
                  for ( i = 0; i < chrom_object["len4"]; i++)
                  {
                      d4.push([0.01*i, chrom_object["d4"][i]/100000.0]); // convert from 10nV to mV.
                  }
                  //console.log(d1);
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
              else
                  $('#sw4').hide();

              if ( chrom_object["len3"] > 0 )
              {
                  $('#sw3').show();
                  $('#sw3').click();
                  // channel 3
                  var d3 = [];
                  //console.log(chrom_object["len1"]);
                  for ( i = 0; i < chrom_object["len3"]; i++)
                  {
                      d3.push([0.01*i, chrom_object["d3"][i]/100000.0]); // convert from 10nV to mV.
                  }
                  //console.log(d1);
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
              else
                  $('#sw3').hide();

              if ( chrom_object["len2"] > 0 )
              {
                  $('#sw2').show();
                  $('#sw2').click();
                  // channel 2
                  var d2 = [];
                  //console.log(chrom_object["len1"]);
                  for ( i = 0; i < chrom_object["len2"]; i++)
                  {
                      d2.push([0.01*i, chrom_object["d2"][i]/100000.0]); // convert from 10nV to mV.
                  }
                  //console.log(d1);
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
              else
                  $('#sw2').hide();


              if ( chrom_object["len1"] > 0 )
              {
                  $('#sw1').show();
                  $('#sw1').click();
                  // channel 1
                  var d1 = [];
                  //console.log(chrom_object["len1"]);
                  for ( i = 0; i < chrom_object["len1"]; i++)
                  {
                      d1.push([0.01*i, chrom_object["d1"][i]/100000.0]); // convert from 10nV to mV.
                  }
                  //console.log(d1);
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
              else
                  $('#sw1').hide();

          }
    }
}

function printReport() {
    if (myReportRequest.readyState == 4 && myReportRequest.status == 200) {
        $("#report_content").html(myReportRequest.responseText);
    }
}

function switchChannelPlot(ch) {
        $('.plot').hide();
        $('#link'+ch).show();
}
