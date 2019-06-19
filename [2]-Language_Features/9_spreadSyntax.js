"use strict"

var distance = (x1, y1, x2, y2) => {
        return Math.trunc(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)))
}//Distance [m] = 33.13608305156178

let points = [12, 3, 45, 6]
console.log("Distance [m] = " + distance(...points) + ' m');
