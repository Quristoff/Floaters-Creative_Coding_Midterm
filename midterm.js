// Quristoff Jiang Midterm assignement
// "Floaters"
// overall logistics
// The piece is composed by three scenes, users should nevigate across the
// scenes via a slider;
// Audio and Visuals differs within scenes
// Lines character says are trigeered when user completed some events
// These are attained by constrcting black rectangles with words on it

// Some random notes
// use tilt(255, n) to change the transparancy of images

//define choose
// choose an element from an array
function choose(array){
  return array[round(random(1,array.length))-1];
}

function mouseOver(xMin,xMax,yMin,yMax){
  if (mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax){
    return true;
  }
  else{
    return false;
  }
}

function display(bool,img,xPos,yPos,widthDenominator,heightDenominator) {
  if (bool) {
    image(img,xPos,yPos,
    img.width/widthDenominator,img.height/heightDenominator);
  }
}
// declare objects and vars
var slider;


var Scene1 = {
  bg:"",
  hand:"",
  randomClouds: [],
  cloud: function(imageArray){ // draw random cloud
    imageMode(CENTER);
    let yPos = choose([random(2*height/3,height),random(0,height/4)]);
    let size = random(2.5,4);
    let chanceGenerator = random(0,10);
    if (chanceGenerator >= 9.97){ // 0.5% of chances
      let cloud = [choose(cloudArray),width+150,yPos,size];
      this.randomClouds[this.randomClouds.length] = cloud;
    }
    for(var i=0; i < this.randomClouds.length;i++) {
      image(this.randomClouds[i][0],this.randomClouds[i][1],
        this.randomClouds[i][2],this.randomClouds[i][0].width/this.randomClouds[i][3],
        this.randomClouds[i][0].height/this.randomClouds[i][3]);
      this.randomClouds[i][1] -= 1;
    }
  },
  music:"",
}



var Scene2 = {
  bg:[],
  character:"",
  randomClouds: [],
  cloud: function(imageArray){ // draw random cloud
    imageMode(CENTER);
    let yPos = random(0,height/5);
    let size = random(4,6);
    let chanceGenerator = random(0,10);
    if (chanceGenerator >= 9.97){ // 0.5% of chances
      let cloud = [choose(cloudArray),width+150,yPos,size];
      this.randomClouds[this.randomClouds.length] = cloud;
    }
    for(var i=0; i < this.randomClouds.length;i++) {
      image(this.randomClouds[i][0],this.randomClouds[i][1],
        this.randomClouds[i][2],this.randomClouds[i][0].width/this.randomClouds[i][3],
        this.randomClouds[i][0].height/this.randomClouds[i][3]);
      this.randomClouds[i][1] -= 1;
    }
  },
  music: ""

}

var Scene3 = {
  bg:[],
  character:"",
  building1:"",
  building2:"",
  building3:"",
  building1Visibility: false,
  building2Visibility: false,
  building3Visibility: false,
  music:""

}

var Scene4 = {
  music:""
}

function preload() {

  // scene 1 media
  Scene1.bg = loadImage("images/scene1-background.png");
  Scene1.hand = loadImage("images/scene1-hand.png");
  cloudArray = [loadImage("images/cloud1.png"),
  loadImage("images/cloud2.png"),
  loadImage("images/cloud3.png"),
  loadImage("images/cloud4.png")];
  Scene1.music = loadSound("sound/Background1.mp3");

  // scene 2 media
  Scene2.bg = [loadImage("images/scene2-background1.png"),
  loadImage("images/scene2-background2.png"),
  loadImage("images/scene2-background3.png")];
  Scene2.character = loadImage("images/scene2-character.png");
  Scene2.music = loadSound("sound/Background2.mp3");


  // scene3 media
  Scene3.bg = [loadImage("images/scene3-background1.png"),
  loadImage("images/scene3-background2.png"),
  loadImage("images/scene3-background3.png")];
  Scene3.character = loadImage("images/scene3-character.png");
  Scene3.building1 = loadImage("images/scene3-building1.png");
  Scene3.building2 = loadImage("images/scene3-building2.png");
  Scene3.building3 = loadImage("images/scene3-building3.png");
  Scene3.music = loadSound("sound/Background3.mp3");

  // Scene4 media
  Scene4.music = loadSound("sound/Background4.mp3");


}


var whichMusic = Scene1.music;

function setup() {
  print(whichMusic);
  createCanvas(1530,740);
  slider = createSlider(0,300);
  //Scene3.music.loop();

}


// scene 1 variables
var titleTransparency = 0;
var showTitle = false;
var cloudArray;


// scene 2 variables
var backgroundFrame = 0; // share between scene 2 and 3



// scene 3 varibles
// var backgroundFrame



function draw() {


  //SCENE1
  if (slider.value() < 100){ // first scene, when slider return a value less than 100

    imageMode(CENTER);
    background(255);
    image(Scene1.bg,width/2,height/2,Scene1.bg.width/2,Scene1.bg.height/2); // background
    Scene1.cloud(cloudArray); // clouds
    image(Scene1.hand,width/2,height/2+8,Scene1.hand.width/2,Scene1.hand.height/2);// hand

    // title
    noStroke();
    textSize(60);
    textAlign(CENTER);
    fill(255,255,255,titleTransparency);
    textFont("Times New Roman")
    text("Floaters",width*2/3,height/2);
    textSize(20);
    fill(0,0,0,titleTransparency)
    text("Move the silder to switch between scenes",width*2/3,height/2+50)

    if (mouseOver(width*2/3-100,width*2/3+100,height/2-70,height/2+70)){
      noFill();
      stroke(0);
      strokeWeight(3);
      ellipse(mouseX,mouseY,frameCount%50);
      if (mouseIsPressed){  // press the mouse to see the title
          showTitle = true;
      }
    }
    if (showTitle == true) {
      titleTransparency += 1;  // gradation effect
    }
  }


    // Scene2
  else if (slider.value() >= 100 && slider.value() < 200){
    whichMusic = Scene2.music;
    background(255);
    image(Scene2.bg[backgroundFrame],width/2,height/2,
    Scene2.bg[0].width/2,Scene2.bg[0].height/2);
    Scene2.cloud(cloudArray);
    image(Scene2.character,width/2,height/2,Scene2.character.width/2,Scene2.character.height/2);

    if (frameCount%12 == 0){
      backgroundFrame += 1;
      if (backgroundFrame > 2){
        backgroundFrame = 0;
      }
    }
  }


    // Scene3
  else {
    whichMusic = Scene3.music;
    background(255);
    image(Scene3.bg[backgroundFrame],width/2,height/2, // background
      Scene3.bg[0].width/2,Scene3.bg[0].height/2);
    if (frameCount%12 == 0){
      backgroundFrame += 1;
      if (backgroundFrame > 2){
        backgroundFrame = 0;
      }
    }
    // buildings
    print (mouseX,mouseY);
    if (mouseOver(0, 841,0,318)){ // 0, 841,0,318
      noFill();
      stroke(0);
      strokeWeight(3);
      ellipse(mouseX,mouseY,frameCount%50);
      if (mouseIsPressed){
        Scene1.building1Visibility = true;
      }
    }
    display(Scene1.building1Visibility,Scene3.building1,
    width/2,height/2,2,2);


    if (mouseOver(842,1036,0,205)){ // 842,1036,0,205
      noFill();
      stroke(0);
      strokeWeight(3);
      ellipse(mouseX,mouseY,frameCount%50);
      if (mouseIsPressed){
       Scene1.building2Visibility = true;
     }
    }
    display(Scene1.building2Visibility,Scene3.building2,
    width/2,height/2,2,2);


    if (mouseOver(1282,1348,0,393)){  //1282,1348,0,393
      noFill();
      stroke(0);
      strokeWeight(3);
      ellipse(mouseX,mouseY,frameCount%50);
      if (mouseIsPressed){
        Scene1.building3Visibility = true;
      }
    }
    display(Scene1.building3Visibility,Scene3.building3,
    width/2,height/2,2,2);




    // character
    image(Scene3.character,width/2,height/2,Scene3.character.width/2,Scene3.character.height/2);


  }






}
