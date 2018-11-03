var express = require('express'); //make express available
var app = express(); //invoke express
var server = require('http').Server( app ) // start the express server instance
var io = require('socket.io')(server) // use socket.io for real time connections aka. wesockets

let port = process.env.PORT

//serve out any static files in our public HTML folder
app.use(express.static('public'))

//do something when someone connects to our page.
io.on('connection', function(socket){
  console.log(socket.id); // log out the unique ID of each person who connects


  // this section is a bit of an information 'relay' it takes the incoming data, replicates it and sends it out to everyone who is connected.
  //look for an incoming addEmoji message from the client
  socket.on('mouseMovement', function(dataToSend){

    //get in our data from the client which is named 'dataToSend'
    //& attach the incoming data (x&y) to this users specific socket connection as mouseX, and mouseY (just so it's something different so we can remember...)
    if(dataToSend.source === 'ghost'){
      socket.ghostMouseX = dataToSend.x
      socket.ghostMouseY = dataToSend.y
    }

    if(dataToSend.source === 'hunter'){
      socket.hunterMouseX = dataToSend.x
      socket.hunterMouseY = dataToSend.y
    }

    ///log this stuff out on the server so we can see it.
    // console.log(socket.id, socket.hunterMouseX, socket.hunterMouseY);
    // console.log(socket.id, socket.ghostMouseX, socket.ghostMouseY);

  }) //close mouseMove

  //setup an interval which will happen every X seconds (set at the bottom)
  let averager = setInterval(function(){

    //get all of the current connections to the server as a list
    let connections = io.sockets.sockets
    // console.log(connections);

    //set up empty arrays (comma seperated lists) to store all of the X and Y positions
    let ghostListX = [];
    let ghostListY = [];
    let hunterListX = [];
    let hunterListY = [];

    //run down the list of current connections one by one
    for (var socketID in connections) { //loop over all the user objects

      //for each unique connection, look at the mouseX and mouseY values, push the respective value into the empty array/list above (we do this seperately so that each time the interval fires, the list gets over written with the most current fresh data.)
      if(connections[socketID].ghostMouseX){ //if there is mouse Data to add, then add it!
        ghostListX.push( connections[socketID].ghostMouseX )
        ghostListY.push( connections[socketID].ghostMouseY )

      }else if(connections[socketID].hunterMouseX){ //same thing but for hunter
        hunterListX.push( connections[socketID].hunterMouseX )
        hunterListY.push( connections[socketID].hunterMouseY )

      }

    }


  //  console.log(listX);
  //  console.log(listY);

    // console.log( "listXAverage: ", averageArray(listX) );
    // console.log( "listYAverage: ", averageArray(listY) );

    //package up the averaged data and use the averageArray utility function at the bottom to average out the list of X and Y positions form all connections. see the note above the averateArray function for more details.
    let averageGhostMouseData = {
      "x": averageArray(ghostListX),
      "y": averageArray(ghostListY)

    }

    let averageHunterMouseData = {
      "x": averageArray(hunterListX),
      "y": averageArray(hunterListY)

    }

    //send the averaged data back down to all of the users.
    io.emit('averageGhostMouse', averageGhostMouseData)
    io.emit('averageHunterMouse',averageHunterMouseData)

  //  console.log('averageMouse', averageMouseData)

}, 300) // do everything between the interval's {} every 3 seconds...



})


// listen for connections to the server :)
var listener = server.listen(port, function() {
  console.log('Your app is listening on port ' + port );
});



//this function takes in an array (a list of number values) & averages them and then returns the average back in the palce of where you used the function)

/*
//eg.
let coolNumbers= [10,200,30,4059,94];
averageArray(coolNumbers) //will become 878.6
*/

function averageArray(list){
  let total = 0; //store a total

  //get each value in our list one by one
  for (var i = 0; i < list.length; i++) {
    total = total + list[i]; //add the most recent list to the total, make this calculated total the new running total.
  }

  return total / list.length ; // send back the final running total divided by the number of entries on the list

}
