var background_images_array=["mars_image_1.JPG","mars_image_2.jpg","mars_image_3.jpg","mars_image_4.jpg"]
var random_number=Math.floor(Math.random()*4);
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
rover_image="rover.png";
background_image=background_images_array[random_number];
 function add() {
    background_imgtag=new Image();//defining a variable with a new image//
    background_imgtag.onload=uploadBackground;//setting a function on loading this variable//
    background_imgtag.src=background_image;
    rover_imgtag=new Image();//defining a variable with a new image//
    rover_imgtag.onload=uploadRover;//setting a function on loading this variable//
    rover_imgtag.src=rover_image;
 }

 function uploadBackground() {
     
     ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
     
 }
 function uploadRover() {
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
 
 window.addEventListener("keydown", my_keydown);
  function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38') {
        up();
        console.log("up");
    }
    if (keypressed=='40') {
        down();
        console.log("down");
    }
    if (keypressed=='37') {
        left();
        console.log("left");
    }
    if (keypressed=='39') {
        right();
        console.log("right");
    }
  }

  function up() {
      if (rover_y>=0) {
          rover_y-=10;
          console.log("when up arrow is pressed x = " + rover_x + ", y= " + rover_y);
           uploadBackground();
           uploadRover();
      }
  }

  function down() {
    if (rover_y<=500) {
        rover_y+=10;
        console.log("when down arrow is pressed x = " + rover_x + ", y= " + rover_y);
         uploadBackground();
         uploadRover();
    }
}

function right() {
    if (rover_x<=690) {
        rover_x+=10;
        console.log("when right arrow is pressed x = " + rover_x + ", y= " + rover_y);
       uploadBackground();
         uploadRover();
    }
}

function left() {
    if (rover_x>=0) {
        rover_x-=10;
        console.log("when left arrow is pressed x = " + rover_x + ", y= " + rover_y);
         uploadBackground();
         uploadRover();
    }
}