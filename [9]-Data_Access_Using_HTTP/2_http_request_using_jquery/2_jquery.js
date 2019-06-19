//import $ from "jquery"
import $ from "https://code.jquery.com/jquery-3.4.1.min.js"


let promise = $.get("https://5d0a7d1dc5896f0014e86cc2.mockapi.io/v0/station_data")

promise.then(
  data => console.log("Success: ", data),
  error => console.log("error: ", error)
)
