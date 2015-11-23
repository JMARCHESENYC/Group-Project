// TEST
console.log('Page loaded...')

user = null;

$(function(){

  // CLICK EVENTS///////////////////////////////////////////////////////

  $("#signup-button").click(function(){
    // TEST
    console.log("Signup for loading...");

    renderNewUserForm();
  });

  $("#login-button").click(function(){
    console.log("Logging in...");
  });

  $("#signup-register").click(function(){
    console.log("Account registering...");
  });

  // RENDERING/////////////////////////////////////////////////////////

  var getUsers = function(){
    console.log('Pre-Ajax..');
    $.ajax({
      url: "http://localhost:3000/users",
      method: "GET",
      dataType: "json"
    }).done(renderUsers);
  };

  // renderUser

  var renderNewUserForm = function(data){
    console.log('Register form loaded...')

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

    var userData = {
      username: username
    };
    $.ajax({
      url: "http://localhost:3000/users",
      method: "POST",
      data: userData
    }).done(getUsers);
  };

});

  var renderUsers = function(){

  };

// TEMP STUFF && GARBAGE//////////////////////////////////////////////////

var renderInstructors = function(data) {
  // console.log("ajax has completed bc I'm rendering instructors");

  // Gotta make sure the right thing is showing and the wrong things aren't
  // Try commenting this stuff out and watch what happens...yuck
  var resultDiv = $('#horizontal');
  resultDiv.empty();
  $('#new-instructor-link').show();
  $('#new-complaint-link').hide();
  $('#form-container').empty();

  // Let's set up Handlebars and compile so all this templating isn't happening server side, but client!
  var template = Handlebars.compile($('#instructor-template').html());
  for(var i=0;i<data.length;i++) {
    resultDiv.append(template(data[i]))
    $('.edit-instructor').click(function() {
      console.log("edit worked");
      var id = $('.edit-instructor').attr("data-id")
      console.log(id);
      editInstructor();
    });
  };

};




