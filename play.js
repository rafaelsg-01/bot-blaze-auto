// run something
var id1 = setInterval(function() { console.log("interval", new Date())}, 1000);
var id2 = setTimeout(function()  { console.log("timeout 1", new Date())}, 2000);
var id3 = setTimeout(function()  { console.log("timeout 2", new Date())}, 5000); // not run
          setTimeout(function()  { console.log("timeout 3", new Date())}, 6000); // not run

// this will kill all intervals and timeouts too in 3 seconds. 
// Change 3000 to anything larger than 10



const highestId = setTimeout(() => {
    for (let i = highestId; i >= 0; i--) {
        clearInterval(i);
        clearTimeout(i);
    }
}, 0);