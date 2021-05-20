import * as chrono from 'chrono-node';
console.log(window.location.pathname)
console.log(chrono.parse(decodeURI(window.location.pathname)))