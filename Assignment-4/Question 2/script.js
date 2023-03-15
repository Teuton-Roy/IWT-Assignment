// const eventDateInput = document.getElementById('event-date');
// const ageOnEventInput = document.getElementById('age-on-event');

// eventDateInput.addEventListener('change', e => {
//   const selectedDate = new Date(e.target.value);
//   const today = new Date();
//   const ageInMilliseconds = today - selectedDate;
//   const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
//   ageOnEventInput.value = Math.floor(ageInYears);
// });

// var a = document.getElementById("Age");
// a.addEventListener("submit", function(e){
//     e.preventDefault()
//     var d1 = document.getElementById("date").value;
//      var m1 = document.getElementById("month").value;
//      var y1 = document.getElementById("year").value;
//      var date = new Date();
//      var d2 = date.getDate();
//      var m2 = 1 + date.getMonth();
//      var y2 = date.getFullYear();
//      var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//      if (d1 > d2){
//          d2 = d2 + month[m2 - 1];
//          m2 = m2 - 1;
//      }
//      if (m1 > m2){
//          m2 = m2 + 12;
//          y2 = y2 - 1;
//      }

//  var d = d2 - d1;
//  var m = m2 - m1;
//  var y = y2 - y1;
// document.getElementById("age").innerHTML = "Your age is " + y + " Years " + m + " Month " + d + " Days";
// a.reset();
// });


var a = document.getElementById("Age");  // get the form element by its ID
a.addEventListener("submit", function(e){  // add a submit event listener to the form element
    e.preventDefault()  // prevent the default form submission behavior
    var d1 = document.getElementById("dob").value.split("-")[2];  // get the day of birth from the date picker value
    var m1 = document.getElementById("dob").value.split("-")[1];  // get the month of birth from the date picker value
    var y1 = document.getElementById("dob").value.split("-")[0];  // get the year of birth from the date picker value
    var date = new Date();  // get the current date and time
    var d2 = date.getDate();  // get the current day of the month
    var m2 = 1 + date.getMonth();  // get the current month (January is 0, so add 1)
    var y2 = date.getFullYear();  // get the current year (4 digits)

    // array containing the number of days in each month (January is 31, February is 28/29, etc.)
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // if the birth day is greater than the current day, adjust the current day and month accordingly
    if (d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    // if the birth month is greater than the current month, adjust the current month and year accordingly
    if (m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;  // calculate the age in days
    var m = m2 - m1;  // calculate the age in months
    var y = y2 - y1;  // calculate the age in years
    
    // display the age in the "age" element
    document.getElementById("age").innerHTML = "Your age is " + y + " years " + m + " months " + d + " days";
    
    a.reset();  // reset the form
});

