function togglePanel(id) {
  $(".panel[id!='panel"+id+"']").slideUp('quick'); 
  $(".panel[id='panel"+id+"']").slideToggle('quick'); 
}

function showWarning(event) {
  var event = event || window.event;
  if(!confirm("Warning:the solution will overwrite the current GC method and application.\nDo you want to proceed?\n")){ 
    event.returnValue = false; 
  }
}

