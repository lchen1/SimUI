/*if (window.addEventListener) {              
    window.addEventListener("resize", browserResize);
} else if (window.attachEvent) {                 
    window.attachEvent("onresize", browserResize);
}*/

/*if (window.addEventListener) {
    window.addEventListener("scroll", function () {fix_sidemenu(); });
    window.addEventListener("resize", function () {fix_sidemenu(); });    
    window.addEventListener("touchmove", function () {fix_sidemenu(); });    
    window.addEventListener("load", function () {fix_sidemenu(); });
} else if (window.attachEvent) {
    window.attachEvent("onscroll", function () {fix_sidemenu(); });
    window.attachEvent("onresize", function () {fix_sidemenu(); });    
    window.attachEvent("ontouchmove", function () {fix_sidemenu(); });
    window.attachEvent("onload", function () {fix_sidemenu(); });
}*/

var xbeforeResize = window.innerWidth;
var ybeforeResize = window.innerWidth;
var zbeforeResize = window.innerWidth;

function resizeIframe() {
    var obj = document.getElementById("main");
    //obj.style.height = (obj.contentWindow.document.body.scrollHeight) + "px";
    obj.style.height = document.documentElement.clientHeight
        //- document.getElementById("header").offsetHeight
        //- document.getElementById("topnav").offsetHeight
        //- document.getElementById("monitors").offsetHeight
        - 45 + "px";
}

function browserResize() {
    var afterResize = window.innerWidth;
}

function open_menu() {
    var x
    if (document.getElementById("sidemenu").style.display == "block") {
        close_menu();
        if (document.getElementsByClassName) {
            x = document.getElementsByClassName("chapter")
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "visible";
            }
            x = document.getElementsByClassName("nav")
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "visible";
            }
            x = document.getElementsByClassName("sharethis")
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "visible";
            }                        
        }
    } else {
        w3_close_all_nav();    
        document.getElementById("sidemenu").style.display = "block";
        if (document.getElementsByClassName) {
            x = document.getElementsByClassName("chapter")
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
            }
            x = document.getElementsByClassName("nav")
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
            }
            x = document.getElementsByClassName("sharethis")
            for (i = 0; i < x.length; i++) {
                x[i].style.visibility = "hidden";
            }
        }
        fix_sidemenu();
    }
}
function close_menu() {
    document.getElementById("sidemenu").style.display = "none";    
}
function fix_sidemenu() {
    var w, top;
    w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    top = scrolltop()      
    if (w < 993 && w > 600) {
        if (top == 0) {
            document.getElementById("sidemenu").style.paddingTop = "120px";            
        }
        if (top > 0 && top < 100) {
            document.getElementById("sidemenu").style.paddingTop = (120 - top) + "px";            
        }
        if (top > 100) {
            //document.getElementById("sidemenu").style.paddingTop = document.getElementById("topnav").offsetHeight + "px";            
            document.getElementById("monitors").style.position = "fixed";
            document.getElementById("monitors").style.top = "0";
        } else {
            document.getElementById("monitors").style.position = "relative";
        }
    } else {
        if (top == 0) {
            if (w < 600) {
                document.getElementById("sidemenu").style.paddingTop = "120px";
            } else {
                document.getElementById("sidemenu").style.paddingTop = "0";
            }
        }
        if (top > 63) {
            document.getElementById("sidemenu").style.paddingTop = "0";            
            document.getElementById("monitors").style.position = "fixed";        
            document.getElementById("monitors").style.top = "0";
        } else {
            document.getElementById("belowtopnav").style.paddingTop = "0";
            document.getElementById("topnav").style.position = "relative";
        }
    }
}
function scrolltop() {
    var top = 0;
    if (typeof(window.pageYOffset) == "number") {
        top = window.pageYOffset;
    } else if (document.body && document.body.scrollTop) {
        top = document.body.scrollTop;
    } else if (document.documentElement && document.documentElement.scrollTop) {
        top = document.documentElement.scrollTop;
    }
    return top;
}
function w3_open_nav(x) {
    var contentNode;
    if (document.getElementById("nav_" + x).style.display == "block") {
        w3_close_nav(x);
    } else {
        w3_close_all_nav();
        if (document.getElementById("nav_" + x).innerHTML == "") {
            contentNode = document.body.removeChild(document.getElementById("nav_" + x + "_content"));
            document.getElementById("nav_" + x).appendChild(contentNode);
            document.getElementById("nav_" + x + "_content").style.display = "block";
        }
        document.getElementById("nav_" + x).style.display = "block";        
        if (document.getElementById("topnavbtn_" + x)) {        
            document.getElementById("topnavbtn_" + x).getElementsByTagName("i")[0].style.display = "none";
            document.getElementById("topnavbtn_" + x).getElementsByTagName("i")[1].style.display = "inline";                
        }
    }
}
function w3_close_nav(x) {
    document.getElementById("nav_" + x).style.display = "none";
    if (document.getElementById("topnavbtn_" + x)) {
        document.getElementById("topnavbtn_" + x).getElementsByTagName("i")[0].style.display = "inline";
        document.getElementById("topnavbtn_" + x).getElementsByTagName("i")[1].style.display = "none";                
    }
}
function w3_close_all_nav() {
    /*w3_close_nav("translate");*/
}
function w3_close_all() {
    w3_close_all_nav();
    close_menu();
}

function run_changed() {
    var _tmp = sessionStorage.getItem('config_info');
    if (_tmp != null)
    {
        var data=JSON.parse(_tmp);
        if (!data.Stream_configured)
            return;
    }

    if (document.getElementById("rd_single").checked)
    {
        document.getElementById("div_stream").style.display="block";
    }
    else if (document.getElementById("rd_auto").checked)
    {
        document.getElementById("div_stream").style.display="none";
    }
    else if (document.getElementById("rd_calib").checked)
    {
        document.getElementById("div_stream").style.display="block";
    }
}

(function () {
    if (window.addEventListener) { 
        document.getElementById("main").addEventListener("click", w3_close_all, true);
        document.getElementById("topnav").addEventListener("click", w3_close_all, true);
        document.getElementById("monitors").addEventListener("click", w3_close_all, true);
    } else if (window.attachEvent) {                 
        document.getElementById("main").attachEvent("onclick", w3_close_all);
        document.getElementById("topnav").addEventListener("click", w3_close_all, true);
        document.getElementById("monitors").addEventListener("click", w3_close_all, true);
    }

    $("input#startsubmit").click(function(){
        $.ajax({
            type: "POST",
            url: "control/start.php", //process to mail
            data: $('form#startform').serialize(),
            success: function(msg){
                $("#thanks").html(msg); //hide button and show thank you
                $("#id_play").hide(); //hide popup  
            },
            error: function(){
                alert("failure");
            }
        });
    });

    $("input#stopsubmit").click(function(){
        if (!confirm("Do you want to proceed?"))
        {
            window.event.returnValue = false;
        }
        else
        {
            $.ajax({
                type: "POST",
                url: "control/stop.php", //process to mail
                data: $('form#stopform').serialize(),
                success: function(msg){
                    $("#thanks").html(msg); //hide button and show thank you
                    $("#id_stop").hide(); //hide popup  
                },
                error: function(){
                    alert("failure");
                }
            });
        }
    });
    
})();

