// TEST
console.log('Page loaded...')

user = null;

$(function(){

  // CLICK EVENTS///////////////////////////////////////////////////////

  $("#signup-button").click(function(){
    // TEST
    console.log("Signup form loading...");

    renderNewUserForm();
  });

  $("#login-button").click(function(){
    console.log("Logging in...");
  });

  // $("#signup-register").click(function(){
  //   console.log("Account registering...");
  //   createUser();
  // });

  // RENDERING/////////////////////////////////////////////////////////

  var getUsers = function(){
    console.log('Pre-Ajax..');
    $.ajax({
      url: "http://localhost:3000/users",
      method: "GET",
      dataType: "json"
    }).done(renderUsers);
  };

  var renderUsers = function(data){
    var resultDiv = $("#results-show");
    resultDiv.empty();

    $("#signup-button").hide();
    $("#login-button").hide();
    $("#signup-form").hide();

    var source = $("#user-view-template").html();
    var template = Handlebars.compile(source);

    for (var x = 0; x < data.length; x++){
      resultDiv.append(template(data[x]));
    };
  };

  var renderNewUserForm = function(data){
    console.log('Register form loaded...')

    var resultDiv = $("#form-container");

    $("#results-show").empty();
    resultDiv.empty();
    resultDiv.show();

    $("#signup-button").hide();
    $("#login-button").hide();

    var source = $("#signup-template").html();
    var template = Handlebars.compile(source);
    var signupHTML = template();

    $("body").append(signupHTML);

    attachNewUserEvent();
  };

  var attachNewUserEvent = function(){
    $("#signup-register").click(function(){
      console.log("User registered...");

      createUser();
    });
  };

  var createUser = function(){
    console.log('New user created...');

    var resultDiv = $("#form-container");
    var username = $('#signup-username').val();

    var userData = {
      username: username
    };
    $.ajax({
      url: "http://localhost:3000/users",
      method: "POST",
      data: userData
    }).done(getUsers);
    resultDiv.empty();
  };

});


// TEMP STUFF && GARBAGE//////////////////////////////////////////////////





