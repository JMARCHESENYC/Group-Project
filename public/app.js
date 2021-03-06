// TEST
console.log('Page loaded...')

var user = null;

// WINDOW ONLOAD
$(function(){
  // CLICK EVENTS///////////////////////////////////////////////////////

  $('#bucket-container').hide();

  "use strict";

  $("#signup-button").click(function(){
    // TEST
    console.log("Signup form loading...");

    renderNewUserForm();
  });

  $("#login-button").click(function(){
    console.log("Logging in...");

  });

  // TEST LINK to myBucketList
  $('#mylist-add').click(function(){
    // console.log('add worked...')

    var x = Math.floor(Math.random() * 34);
    displayBucketEvent(x);
  });


  // RENDERING////////////////////////////////////////////////////////

  var getUsers = function(){
    console.log('Pre-Ajax..');
    $.ajax({
      url: "/users",
      method: "GET",
      dataType: "json"
    }).done();
  };

  var renderBucketList = function(){

    $("#signup-button").hide();
    $("#login-button").hide();
    $("#signup-form").hide();

    console.log('bucket div rendered');
  };

  var attachNewUserEvent = function(){
    $('#register').click(function(){

      console.log("User registered...");

      createUser();

      $("#signup-button").hide();
      $("#login-button").hide();
      $("#signup-form").hide();
      $('#bucket-container').show();

      // renderBucketList();
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
      url: "/users",
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

        var eventInfo = "<strong>" + data[i].title + "</strong>" + "<br>" + data[i].info

        var marker = new google.maps.Marker ({
          position: data[i].location,
          map: map,
          animation: google.maps.Animation.DROP,
          title: data[i].title
        });

        $('#mylist-add').click(function(){
        // console.log('add worked...')

            var x = Math.floor(Math.random() * 35);

        });

        // recursive function call
        attachEventInfo(marker, eventInfo);

        // function to attach event info to markers
        function attachEventInfo(marker, eventInfo) {
          var infowindow = new google.maps.InfoWindow({
            content: eventInfo
          });

          // attach click event to markers
          marker.addListener('click', function() {
            infowindow.open(map, marker);
            // consoleLog
          });
        };

      }; // end of loop
    }); // end of .get

  }; //End of initialize
  initialize();

  var displayBucketEvent = function(x){

    var resultDiv = $("#bucket-list-todo");
    var resultDivDidit = $('#bucket-list-completed');
    // resultDiv.empty();

    var eventNumber = x;

    $.get('/bucket_list', function(data) {


      var divNumber = "Event" + eventNumber;
      console.log(divNumber)

      console.log(data[eventNumber].title);

      var $emptyBucket = $("<div id=" + divNumber + "></div>")
      var $bucketButton = $("<br>" + "<button id=" + eventNumber + " class='btn btn-primary'>I f**king did it!!</button>" + "<br>" + "<br>")

      $emptyBucket.append(data[eventNumber].title);
      $emptyBucket.append($bucketButton);

      $("#bucket-list-todo").append($emptyBucket);


      $('#' + divNumber).click(function(){
        // debugger
        $('#' + eventNumber).hide();
        $('#' + divNumber).hide();

        resultDivDidit.append(data[eventNumber].title + "<br>" + "<br>");

        console.log(eventNumber)
      });


    });
  }; // END of displayBucketEvent


  // USER EDIT
  // var editUser = function($id){
  //   console.log('Id is ' + $id);
  //   console.log($(this).data("id"))

  //   // $.ajax({
  //   //   url: "http://localhost:3000/users/" + $id,
  //   //   method: "GET"
  //   // }).done(userUpdateForm);
  // };
  // editUser();

// $("#map-canvas").on("click", ".addEvent",function() {
//   console.log($(".addEvent"))
// })


  console.log('User is ' + user);
  console.log('The cookie is ' + document.cookie)
}); // END OF WINDOW ONLOAD


// TEMP STUFF && GARBAGE//////////////////////////////////////////////////

// var editInstructor = function($id) {
//   // start by finding the id of the instructor. it's in the instructor-container class!
//   console.log($id);
//   $.ajax({
//     url: "http://localhost:3000/instructors/" + $id,
//     method: "GET",
//     // data: 'json'
//   }).done(updateForm);
// ​
//   // code the ajax call, be sure to add the id onto the url
//   // use updateForm for the callback to .done()
// };
// ​
// var updateForm = function(data) {
//   var resultDiv = $('#form-container');
//   $("#horizontal").empty();
//   resultDiv.empty();
//   resultDiv.show();
//   var template = Handlebars.compile($("#instructor-edit-template").html());
//   resultDiv.append(template(data));
//   $('.edit-instructor-submit').click(function () {
//     saveUpdate();
//   });
// };
// ​
// var saveUpdate = function() {
//   var $id = $('#instructor-id').val();
//   // What other variables do  we need in the form?
//   var $instructorName = $('#instructor-name').val();
//   var $instructorMotto = $('#instructor-motto').val();
// ​
//   // create an instructorData object mapping the same k/v pairs to the variables you just made
//   var instructorData = {
//     name: $instructorName,
//     motto: $instructorMotto
//   }
// ​
//   // Make the ajax call similar to createInstructor except make it a put request
//   $.ajax({
//     url: "http://localhost:3000/instructors/" + test,
//     method: "PUT",
//     data: instructorData
//   }).done(getInstructors);
// };


// TEST
// var clicked = function() {
//   var clickCount = getCount();
//   console.log('party in the usa' + clickCount);
// };


    // var wrapDiv = $("#bucket-display");
    // var resultDiv = $('#bucket-container');
    // $resultDiv.empty();

    // $resultDiv.show();

    // wrapDiv.on('click', '#register', function(){
    // });


  // var renderUsers = function(data){
  //   var resultDiv = $("#results-show");
  //   resultDiv.empty();

  //   $("#signup-button").hide();
  //   $("#login-button").hide();
  //   $("#signup-form").hide();

  //   var source = $("#user-view-template").html();
  //   var template = Handlebars.compile(source);

  //   for (var x = 0; x < data.length; x++){
  //     resultDiv.append(template(data[x]));
  //   };
  // };


      // var clicked = function() {
      //   console.log('party in the usa');
      // }


              // // link to myBucketList
        // var listLink = function() {
        //   $('#marker-link').click(function(){
        //     console.log('addition worked...');
        //     displayBucketEvent(i);
        //   });
        // };
        // // listLink();

        // var consoleLog = console.log(data[i].title);


  // MIGHT NOT NEED THIS
  // var attachNewBucketEvent = function(){
  // };


      // resultDiv.append(data[eventNumber].title + "<br>" + "<button id=" + eventNumber + " class='btn-btn-primary'>I f**king did it!!</button>" + "<br>" + "<br>");
