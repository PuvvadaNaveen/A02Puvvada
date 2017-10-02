var App = {
  launch: function () {
    App.getName();
   
    App.gettype();
    App.getWidth();
    App.getLength();
    App.getArea();
    App.showExample();
    App.getEstimate();
    App.submitName();
  },
  //document.getElementById("n").innerHTML;
  getName: function () {
    let answer = prompt("What is your name of Organization", "North West FootBall Team");
    if (answer != null) {
      // document.getElementById("first").innerHTML = answer;
      $("#first").html(answer); // $ = jQuery object; in jQuery use # with id, . with class
    }
  },
  gettype: function () {
    let answer = prompt("What is Type of sport", "football");
    if (answer != null) {
      //document.getElementById("last").innerHTML = answer;
      $("#last").html(answer);  // passing in the inner html with the  jQuery html() method 
    }
  },
  getWidth: function () {
    let answer = prompt("What is the number of rows organization want to reserve", 5);
    if (answer != null) {
      //document.getElementById("width").innerHTML = answer;
      $('#width').html(answer);   // either double or single tick marks designate strings
    }
  },
  getLength: function () {
    let answer = prompt("What is the number of seats per row organization want to reserve", 5);
    if (answer != null) {
      $('#length').html(answer);  // html method works as a getter and a setter
    }
  },
  getArea: function () {
    //let inputWidth = parseFloat(document.getElementById("width").innerHTML);
    //let inputLength = parseFloat(document.getElementById("length").innerHTML);
    //let answer = Area.calculateArea(inputWidth, inputLength); // do some checks on the inputs
    //document.getElementById("area").innerHTML = answer;
    let inputWidth = parseFloat($('#width').html());
    let inputLength = parseFloat($('#length').html());
    let answer = App.calculateArea(inputWidth, inputLength); // do some checks on the inputs
    $("#area").html(answer);
    $(".displayText").css('display', 'inline-block');  //overwrites display: hidden to make it visible 
    alert("You have booked " + answer + " tickets.");
  },
  calculateArea: function (givenWidth, givenLength) {
    if (typeof givenWidth !== 'number' || typeof givenLength !== 'number') {
      throw Error('The given argument is not a number');
    }

    const minWidth = 1;
    const minLength = 1;
    const maxWidth = 100;
    const maxLength = 100;

    // check the first argument.................
    let width  // undefined
    if (givenWidth < minWidth) {
      width = minWidth;
    }
    else if (givenWidth > maxWidth) {
      width = maxWidth;
    }
    else {
      width = givenWidth;
    }

    //check the second argument ...................
    if (givenLength < minLength) {
      length = minLength;
    }
    else if (givenLength > maxLength) {
      length = maxLength;
    }
    else {
      length = givenLength;
    }

    // calculate the answer and store in a local variable so we can watch the value
    let area = width * length;
    // return the result of our calculation to the calling function
    return area;
  },
  getEstimate: function () {
    let area = parseFloat(document.getElementById("area").innerHTML);
    let ct;
    if (area < 1) { ct = 0; }
    else { ct = area }; // estimate 1 per square mile
    // document.getElementById("count").innerHTML = count;
    $("#count").html(ct);
    alert("You have about " + ct + " seats reserved.");
    $("#count").css("color", "blue");
    $("#count").css("background-color", "yellow");
  },
submitName: function(){
let nam=document.getElementById("n").value;
$("#nd").html(nam);
  },
showExample: function () {
    document.getElementById("displayPlace").innerHTML = "";
    let totalCount = parseFloat($("#count").html());
    for (var i = 0; i < totalCount; i++) {
      App.addImage(i);
    }
  },
  addImage: function (icount) {
    var imageElement = document.createElement("img");
    imageElement.id = "image" + icount;
    imageElement.class = "picture";
    imageElement.style.maxWidth = "90px";
    var displayElement = document.getElementById("displayPlace");
    displayElement.appendChild(imageElement);
    document.getElementById("image" + icount).src = "nw.png";
  },
  displayExploreButtons: function () {
    $(".displayExploreButtons").css('display', 'block');  //overwrites display: hidden to make it visible 
  },
 
};