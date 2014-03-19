$(function(){
  var menu = $(".menu");

  $(".menu-bar").click(function(e){
    menu.toggleClass("menu-hidden");
    
    $(this).hasClass("active") ? 
      $(this).removeClass("entypo-cancel").addClass("entypo-menu").toggleClass("active") :
      $(this).removeClass("entypo-menu").addClass("entypo-cancel").toggleClass("active"); 

  });//click

  $('#link_portfolio').scrollTo();
  $('#link_skills').scrollTo();
  
});
