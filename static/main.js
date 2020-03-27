
var msgMgr = new MsgManager();

//0. Layout
$( "#mycontainer" ).load( "static/layout/main.html", function(){
    $( "#cssmenu" ).load( "static/layout/menu.html", function(){
        init();
        running();
    } );
} );

//1. Init
function init(){

  // UI-Menu
  $("#cssmenu").menumaker({
      title: "FlaskExample",
      format: "multitoggle"
  });

  // UI
  initMainUI();
}

//2. Update
function running(){
    requestAnimationFrame( running );
    msgMgr.run();
}