let xPos, yPos, xSpeed, ySpeed; 
let xPos2, yPos2, xSpeed2, ySpeed2;

var a = 0; //rotation

var x, y , d, speed;
var x2, y2, d2, speed2;
var x3, y3, d3, speed3;

//var mySong, amplitude, play;

//function preload(){

//mySong = loadSound( 'assets/massiveAttackAngel.mp3')
//}

function setup() {
    noStroke(); // no black outline
    var canvas = createCanvas(600, 600);
    canvas.parent("p5container");

    xPos = width/2;
    yPos = height/2;
    xSpeed = 1;
    ySpeed = 1;

    xPos2 = width/2;
    yPos2 = height/2;
    xSpeed2 = 1;
    ySpeed2 = 1;

    x = width/2;
    y = height/2 // assigning the position
    d = 200;
    speed = 1 ;

    x2 = width/1;
    y2 = height/2; 
    d2 = 200;
    speed2 = 1;

    x3 = width/7;
    y3 = height/3; 
    d3 = 200;
    speed3 = 1;

    // mySong.play();

    // amplitude = new p5.Amplitude();


    //change the angleMode to degrees so it's easier, otherwise it's in radians 
  angleMode(DEGREES);
}

function draw() {
   
    // var level = amplitude.getLevel();
    //     console.log(amplitude.getLevel())
    
    //     var vol= map ( level,0, 1,0, 1000)
    
    //     var col = map (level,0, 1,0,  255)
        
    
    //     if(vol> 200){
    //         fill(col + 10);
    //         ellipse(width/2, height/2, vol + 100 );
    //     }

   background(14,34,105);
    fill(8, 19, 56)
    

    push();
  // translate to where you want the center of the ellipse to be
  translate(width/2, height/2);
  rotate(25);
  // draw the ellipse at the origin
  ellipse(20, 200, 350, 150); //hill 4 
    pop();

 


    x3 ++ ; 1 
    x3 = x3 + speed3;

   if(x3 > height + d3/2){  //if the centre point is greater than height, 
       //return to zero. Then new variable halfs the center point again so it goes off screen.

       x3 = 0 - d3/2;

   }

   

   fill( '#6D88ED');
   ellipse(x3 , 27, 80, 80,); //3|4thbackground floaty 

   fill( '#112E9C');
   ellipse(x3 , 25, 72 , 72,); //3|4thbackground floaty2

   fill( '#0D1F60');
   ellipse(x3 , 425, 28, 28,); //3|3rdbackground floaty 


   fill( '#0D1D57');
   ellipse(x3 , 300, 48, 48,); //3|background floaty 

   fill( '#0D2064');
   ellipse(x3 , 302, 40 , 40,); //3|background floaty2

   fill( '#071857');
   ellipse(x3 , 170, 58, 58,); //3|2ndbackground floaty 

   fill( '#18359E');
   ellipse(x3 , 167, 50 , 50,); //3|2ndbackground floaty2
    
   fill('#071857');
   rect(530, y2, 20, 120,); //falling right brick 2

   fill(17, 46, 156);
   rect(550, y2, 10, 120,); //fallingright brick 2
    
     fill( '#2344BF');
    ellipse(550, 440, 450, 150,); //hill 3

    
    x2 ++ ; 1 
    x2 = x2 + speed2;

   if(x2 > height + d2/2){  //if the centre point is greater than height, 
       //return to zero. Then new variable halfs the center point again so it goes off screen.

       x2 = 0 - d2/2;

   }
   
   fill( '#6D88ED');
   ellipse(x2 , 27, 80, 80,); //2|4thbackground floaty 

   fill( '#112E9C');
   ellipse(x2 , 25, 72 , 72,); //2|4thbackground floaty2

   fill( '#0D1F60');
   ellipse(x2 , 425, 28, 28,); //2|3rdbackground floaty 


   fill( '#0D1D57');
   ellipse(x2 , 300, 48, 48,); //2|background floaty 

   fill( '#0D2064');
   ellipse(x2 , 302, 40 , 40,); //2|background floaty2

   fill( '#071857');
   ellipse(x2 , 170, 58, 58,); //2|2ndbackground floaty 

   fill( '#18359E');
   ellipse(x2 , 167, 50 , 50,); //2|2ndbackground floaty2
    
   y2 ++ ; 1 
   y2 = y2 + speed2;

  if(y2 > height + d2/2){  //if the centre point is greater than height, 
      //return to zero. Then new variable halfs the center point again so it goes off screen.

      y2 = 0 - d2/2;
  }

   fill('#04103C');
   rect(360, y2, 15, 100,); //falling right brick

   fill('#05144B');
   rect(370, y2, 15, 100,); //fallingright brick 



  
    
   fill( '#3E61E3');
    ellipse(460, 500, 537, 164,); //hill 2

    
    
    x++ ; 1
     x = x + speed;

    if(x > height + d/2){  //if the centre point is greater than height, 
        //return to zero. Then new variable halfs the center point again so it goes off screen.

        x = 0 - d/2;
    }
    

    fill( '#6D88ED');
    ellipse(x , 27, 80, 80,); //4thbackground floaty 

    fill( '#112E9C');
    ellipse(x , 25, 72 , 72,); //4thbackground floaty2

    fill( '#0D1F60');
    ellipse(x , 425, 28, 28,); //3rdbackground floaty 


    fill( '#0D1D57');
    ellipse(x , 300, 48, 48,); //background floaty 

    fill( '#0D2064');
    ellipse(x , 302, 40 , 40,); //background floaty2

    fill( '#071857');
    ellipse(x , 170, 58, 58,); //2ndbackground floaty 

    fill( '#18359E');
    ellipse(x , 167, 50 , 50,); //2ndbackground floaty2


    fill('#6D88ED');
    rect(20, 470, 158, 370,); //left brick 4

    fill('#4D6FEE');
    rect(10, 470, 158, 370,); //left brick 4

    fill('#1D3EB9');
    rect(-15, 450, 158, 370,); //left brick 3

    fill('#18359E');
    rect(-30, 450, 158, 370,); //left brick 3


    fill('#040B23');
    rect(415, 440, 198, 382,); //right brick 3

    fill('#040E32');
    rect(430, 440, 198, 382,); //right brick 3

    fill('#04103C');
    rect(476, 400, 198, 382,); //right brick 2

    fill('#05144B');
    rect(490, 400, 198, 382,); //right brick 2


    fill('#0D2684');
    rect(-60, 400, 159, 370,); //left brick 2

    fill('#071857');
    rect(-75, 400, 156, 371,); //left brick 2

    fill( '#081338');
    ellipse(120, yPos, 82 , 82,); //little floaty 

    fill( '#0A1743');
    ellipse(115, yPos, 73 , 74,); //little floaty 2

    //horizontal movement
   // xPos = xPos + xSpeed;
   // if (xPos + 50 > width || xPos-50 < 0 ){
   //     xSpeed *= -1; //inverts the value
    

    //vertical movement
    yPos = yPos + ySpeed;
    if (yPos+140> height || yPos-25 < 0){
        ySpeed *= -1;
    }


    fill( '#081338');
    ellipse(350, yPos2, 323 , 316,); // big floaty

    fill( '#0A1743');
    ellipse(360, yPos2, 287 , 287,); //2nd big floaty
    
    //horizontal movement
    //xPos2 = xPos2 + xSpeed2;
    //if (xPos2 + 50 > width || xPos-50 < 0){
    //    xSpeed2 *= -1; //inverts the value
    

    //vertical movement
    yPos2 = yPos2 + ySpeed2;
    if (yPos2+270 > height || yPos2-50 < 0){
        ySpeed2 *= -1;

    }

    fill( '#071857');
    ellipse(300, 560, 537, 164,); //hill

    fill( '#0A1743');
    ellipse(120, 555, 73 , 105,); //baby shadow

    fill( '#05144B');
    ellipse(320, 678, 301 , 398,); //big shadow

    fill('#071857');
    rect(530, 375, 198, 382,); //right 2ndborderbricks

    fill(7, 16, 49 );
    rect(-115, 379, 166, 310,); //leftborder bricks
    
    fill(0);
    rect(-140, 379, 166, 310,); //leftborder bricks

    fill(17, 46, 156 );
    rect(560, 375, 166, 310,); //rightborder bricks


    

    



}