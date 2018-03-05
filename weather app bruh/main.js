

// 'use strict';

$("#getWeather").on("click",function(){
  var city = $("#city").val()
  var state = $("#state").val()
  alert("right click, inspect console")
  $.ajax({
    url:"http://api.openweathermap.org/data/2.5/weather?q="+city+","+state+"&APPID=efde7c3602e51e82abca166b2b3c6a2c"+"&units=imperial",
    success: function(response){
      console.log(response.main.temp)
    },
    error: function(gwan){
      console.log(gwan)
    }
  });
});


function setup() {
  createCanvas(200,200)
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=13c064c3fecfb65b22138b5f9669f969&units=metric',gotData);
}

function gotData(data){
  console.log(data);
  weather = data;
}

function draw(){
  background(0);
}
// (function() {
//   $.get("http://data.consumerfinance.gov/api/views.json",function(r){
//     console.log(r)
//     // $("body").append("<h1>")
//     // r.forEach(function(el){
//     //   console.log(el.name +"is"+el.description)
//
//     })
//
//   // })
//   // Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD
// })();
//
//
//
// // })
//
// $("#getDataButton").on("click",function(){
//   $.get("http://data.consumerfinance.gov/api/views.json",function(r){
//     // $("body").append("<h1> +"r"+<h1>")
//     console.log(r);
//   })
//
// })
// $("#getCustomDataButton").on("click",function(){
//   $.get("http://data.consumerfinance.gov/api/views.json",function(r){
//     // $("body").append("<h1> +"r"+<h1>")
//     // console.log(r[0].name)
//     $("h1").text(r[0].name)
//
//   })
//
// })
