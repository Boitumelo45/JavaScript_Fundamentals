"use strict"

/*
  XHR
  X - XML
  H - HTTP
  R - Request

  https://www.mockapi.io/projects
*/

let xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    console.log(this.responseText);
  }
};

xhttp.open("GET", "https://5d0a7d1dc5896f0014e86cc2.mockapi.io/v0/station_data", true)

xhttp.send()
