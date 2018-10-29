var socket = io.connect();

socket.on('connect', function(data){
  console.log("we connected to the server as" + socket.id)
})


$('.playbox').mousemove(function(event) {

  //console.log(event.clientX, event.clientY)

  var dataToSend = {
    'source': 'ghost',
    'x': event.clientX,
    'y': event.clientY
  }

  socket.emit('mouseMovement', dataToSend); // send the data up to the server

});

let lampDebounce = false;

socket.on('averageGhostMouse',function(averageGhostMouseData){
 console.log(averageGhostMouseData);

let offsetx = $('.playbox').get(0).offsetLeft
let offsety = $('.playbox').get(0).offsetTop




  $('.ghost').css({
    'position':'absolute' ,
    'left': averageGhostMouseData.x + offsetx ,
    'top': averageGhostMouseData.y + offsety ,
    'transition-timing-function' : 'ease-out' ,
    'transition' : '0.2s' ,
    'z-index': '3'

  })

  let ghostOverlapLamp = $('.ghost').overlaps('.lamp').length;
  // console.log(  ghostOverlap );

  if(lampDebounce == false){ //if the  the debounce gate is open
   if( ghostOverlapLamp == 1 ){ //we hit!
      $('.lamp').attr('src', 'image/lamp.gif') //change the image
        console.log('lamp hit!')
        lampDebounce = true; // close the debounce gate
        setTimeout(function(){ //wait for the specified amount of time indicated below
          lampDebounce = false; //open the gate back up.
        },1000) //1 second...
    }
  }

     //  }

     let ghostOverlapChair = $('.ghost').overlaps('.chair').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapChair == 1 ){ //we hit!
         $('.chair').attr('src', 'image/chair.gif') //change the image
           console.log('chair hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapBall = $('.ghost').overlaps('.ball').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapBall == 1 ){ //we hit!
         $('.ball').attr('src', 'image/coffee.gif') //change the image
           console.log('chair hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapHorse = $('.ghost').overlaps('.horse').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapHorse == 1 ){ //we hit!
         $('.horse').attr('src', 'image/horse.gif') //change the image
           console.log('chair hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }

     let ghostOverlapCouch = $('.ghost').overlaps('.couch').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapCouch == 1 ){ //we hit!
         $('.couch').attr('src', 'image/couch.gif') //change the image
           console.log('chair hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }

     let ghostOverlapPlant = $('.ghost').overlaps('.plant').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapPlant == 1 ){ //we hit!
         $('.plant').attr('src', 'image/plant.gif') //change the image
           console.log('chair hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapFrame = $('.ghost').overlaps('.frame').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapFrame == 1 ){ //we hit!
         $('.frame').attr('src', 'image/frame.gif') //change the image
           console.log('chair hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }

     let ghostOverlapCloset = $('.ghost').overlaps('.closet').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapCloset == 1 ){ //we hit!
         $('.closet').attr('src', 'image/closet.gif') //change the image
           console.log('closet hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }

     let ghostOverlapBowl = $('.ghost').overlaps('.bowl').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapBowl == 1 ){ //we hit!
         $('.bowl').attr('src', 'image/bowl.gif') //change the image
           console.log('bowl hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapToilet = $('.ghost').overlaps('.toilet').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapToilet == 1 ){ //we hit!
         $('.toilet').attr('src', 'image/toilet.gif') //change the image
           console.log('toilet hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapBroom = $('.ghost').overlaps('.broom').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapBroom == 1 ){ //we hit!
         $('.broom').attr('src', 'image/broom.gif') //change the image
           console.log('broom hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }



     let ghostOverlapFloorboard = $('.ghost').overlaps('.floorboard').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapFloorboard == 1 ){ //we hit!
         $('.floorboard').attr('src', 'image/floorboard.gif') //change the image
           console.log('floorboard hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapFloorboard2 = $('.ghost').overlaps('.floorboard2').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapFloorboard2 == 1 ){ //we hit!
         $('.floorboard2').attr('src', 'image/floorboard2.gif') //change the image
           console.log('floorboard2 hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapFloorboard3 = $('.ghost').overlaps('.floorboard3').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapFloorboard3 == 1 ){ //we hit!
         $('.floorboard3').attr('src', 'image/floorboard3.gif') //change the image
           console.log('floorboard3 hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapFloorboard4 = $('.ghost').overlaps('.floorboard4').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapFloorboard4 == 1 ){ //we hit!
         $('.floorboard4').attr('src', 'image/floorboard4.gif') //change the image
           console.log('floorboard4 hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapFloorboard5 = $('.ghost').overlaps('.floorboard5').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapFloorboard5 == 1 ){ //we hit!
         $('.floorboard5').attr('src', 'image/floorboard5.gif') //change the image
           console.log('floorboard5 hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapFloorboard6 = $('.ghost').overlaps('.floorboard6').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapFloorboard6 == 1 ){ //we hit!
         $('.floorboard6').attr('src', 'image/floorboard6.gif') //change the image
           console.log('floorboard6 hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapFloorboard7 = $('.ghost').overlaps('.floorboard7').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapFloorboard7 == 1 ){ //we hit!
         $('.floorboard7').attr('src', 'image/floorboard7.gif') //change the image
           console.log('floorboard7 hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }

     let ghostOverlapFloorboard8 = $('.ghost').overlaps('.floorboard8').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapFloorboard8 == 1 ){ //we hit!
         $('.floorboard8').attr('src', 'image/floorboard8.gif') //change the image
           console.log('floorboard8 hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapFloorboard9 = $('.ghost').overlaps('.floorboard9').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapFloorboard9 == 1 ){ //we hit!
         $('.floorboard9').attr('src', 'image/floorboard9.gif') //change the image
           console.log('floorboard9 hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }

     let ghostOverlapFloorboard10 = $('.ghost').overlaps('.floorboard10').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapFloorboard10 == 1 ){ //we hit!
         $('.floorboard10').attr('src', 'image/floorboard10.gif') //change the image
           console.log('floorboard10 hit!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }



     let ghostOverlapBounds2 = $('.ghost').overlaps('.bounds2').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapBounds2 == 1 ){ //we hit!
         $('.ghost').attr('src', 'image/ghostbounds.gif') //change the image
           console.log('OUT OF BOUNDS!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }


     let ghostOverlapBounds1 = $('.ghost').overlaps('.bounds').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( ghostOverlapBounds1 == 1 ){ //we hit!
         $('.ghost').attr('src', 'image/ghostbounds.gif') //change the image
           console.log('OUT OF BOUNDS!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },1000) //1 second...
       }
     }



     let lightOverlapGhost = $('.flashlight').overlaps('.ghost').length;
     // console.log(  ghostOverlap );

     if(lampDebounce == false){ //if the  the debounce gate is open
      if( lightOverlapGhost == 1 ){ //we hit!
         $('.ghost').attr('src', 'image/ghostcaught2.gif').css({
           'visibility':'visible'
         })
           console.log('ghost caught!')
           lampDebounce = true; // close the debounce gate
           setTimeout(function(){ //wait for the specified amount of time indicated below
             lampDebounce = false; //open the gate back up.
           },4000) //1 second...
       }
     }


   })

   socket.on('averageHunterMouse',function(averageHunterMouseData){

   //  console.log(averageMouseData);

   let offsetx = $('.playbox').get(0).offsetLeft
   let offsety = $('.playbox').get(0).offsetTop


   // console.log(averageMouseData);

   // $('.flashlight').css({
   //   'position':'absolute' ,
   //   'left': event.clientX ,
   //   'top': event.clientY ,
   //   'transition-timing-function' : 'ease-out' ,
   //   'transition' : '0.2s'

   $('.flashlight').css({
     'position':'absolute' ,
     'left': averageHunterMouseData.x + offsetx ,
     'top': averageHunterMouseData.y + offsety ,
     'z-index': '2' ,
     'transition-timing-function' : 'ease-out' ,
     'transition' : '0.2s'


   })
//
//
});
