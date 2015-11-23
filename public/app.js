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


var initialize = function() {

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 2,
    maxZoom: 2,
    minZoom: 2,
    streetViewControl: false,
    draggable: false,
    // mapTypeControl: false,
    center: new google.maps.LatLng(31.639215, -7.982481),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });


};

initialize();
 // google.maps.event.addDomListener(window, 'load', initialize);



});

// google.maps.event.addDomListener(window, 'load', initMap);

// TEMP STUFF && GARBAGE//////////////////////////////////////////////////
// 

