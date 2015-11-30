// TEST
console.log('Page loaded...')


user = null;

// WINDOW ONLOAD
$(function(){
  // CLICK EVENTS///////////////////////////////////////////////////////

"use strict";
  $("#signup-button").click(function(){
    // TEST
    console.log("Signup form loading...");

    renderNewUserForm();
  });

  $("#login-button").click(function(){
    console.log("Logging in...");

  });

  $('#mylist-add').click(function(){
    // console.log('add worked...')
    displayBucketEvent();
  });

  // DON'T NEED
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

  var attachNewUserEvent = function(){
    $('#register').click(function(){

      console.log("User registered...");

      createUser();
    });
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

  // MAP SETUP
  var initialize = function(data) {

    var infowindow = new google.maps.InfoWindow();

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 2,
      // maxZoom: 12,
      minZoom: 2,
      streetViewControl: false,
      draggable: true,
      tilt: 45,
      // mapTypeControl: false,
      center: new google.maps.LatLng(23.639215, -7.982481),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    $.get('/bucket_list', function(data) {


      // loop through our data to make markers
      for (var i = 0; i < data.length; i++) {

        var eventInfo = "<strong>" + data[i].title + "</strong>" + "<br>" + data[i].info + "<a href='http://google.com' class='button'><br>Add to Bucket List</a>";

        var marker = new google.maps.Marker ({
          position: data[i].location,
          map: map,
          animation: google.maps.Animation.DROP,
          title: data[i].title
        });

        // recursive function call
        attachEventInfo(marker, eventInfo);

        // function to attach event info to markers
        function attachEventInfo(marker, eventInfo) {
          var infowindow = new google.maps.InfoWindow({
            content: eventInfo
          });

        // attache click event to markers
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        }


      }; // end of loop
    }); // end of .get

  }; //End of initialize
  initialize();


  // MIGHT NOT NEED THIS
  // var attachNewBucketEvent = function(){
  // };

  var displayBucketEvent = function(){

    var resultDiv = $("#bucket-list-todo");
    resultDiv.empty();

    $.get('/bucket_list', function(data) {
      console.log(data[1].title)

      resultDiv.append(data[3].title);
    });
  };

}); // END OF WINDOW ONLOAD


// TEMP STUFF && GARBAGE//////////////////////////////////////////////////
 // $("marker").attr("class","marker");

        // $(this).click(function() {
        //   console.log("works");
        // });


// google.maps.event.addListener(marker, 'click', function() {
//   marker.info.open(map, marker);
// });


        //  google.maps.event.addListener(marker, 'click', function() {
        //     // infowindow.setContent(this.title);
        //     infowindow.setContent(iwContent);
        //     infowindow.open(map, this);

        //     console.log(this);
        // });


        // var test_data = data[i];

        // marker.addListener('click', function(data) {
        //   // $('#myModal').modal('show');
        //   console.log("modals");
        //   console.log(test_data);
        //   console.log(typeof test_data);


 // $('#myModal').modal('show');
