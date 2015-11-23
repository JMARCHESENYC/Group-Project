// TEST
console.log('Page loaded...')

user = null;

$(function(){

  // CLICK EVENTS///////////////////////////////////////////////////////////

  $("#signup-button").click(function(){
    // TEST
    console.log("Signup for loading...")

    renderNewUserForm();
  });

  $("#login-button").click(function(){
    console.log("Logging in...")
  });

  $("#signup-register").click(function(){
    console.log("Account registering...")
  });

  // AJAX AND RENDERING CALLSBACKS//////////////////////////////////////////

  var renderNewUserForm = function(data){
    console.log('Register form loaded...')

    $("#signup-button").hide();
    $("#login-button").hide();

    var source = $("#signup-template").html();

    var template = Handlebars.compile(source);
    var signupHTML = template();

    $("body").append(signupHTML);
    // attachNewUserEvent();
  };



});

// TEMP STUFF && GARBAGE//////////////////////////////////////////////////


