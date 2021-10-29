// Quristoff Jiang Midterm assignement
// "Floaters"
// overall logistics
// The piece is composed by three scenes, users should nevigate across the
// scenes via a slider;
// Audio and Visuals differ among scenes
// Lines character says are trigeered when user completed some events
// These are attained by constrcting black rectangles with words on it

// Some random notes
// use tilt(255, n) to change the transparancy of images

// choose function
// choose an element from an array
function choose(array){
  return array[round(random(1,array.length))-1];
}

// mouseOver function
// return boolean value indicating whether the cursor is on a certain area
function mouseOver(xMin,xMax,yMin,yMax){
  if (mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax){
    return true;
  }
  else{
    return false;
  }
}

// display function
// display a image on a certain position if the boolean is true
function display(bool,img,xPos,yPos,widthDenominator,heightDenominator) {
  if (bool) {
    image(img,xPos,yPos,
    img.width/widthDenominator,img.height/heightDenominator);
  }
}

// musicLoop function
// play the specified music when the previous music ends
function musicLoop(soundObject){
  if (!Scene1.music.isPlaying() && !Scene2.music.isPlaying()
  && !Scene3.music.isPlaying() && !Scene4.music.isPlaying()){
    soundObject.play()
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
  lineShowed:false,
  line:"\"Do you know floaters? Those small shapes that float\n"+
  "across your vision when looking into the sky. You can always see them,\nbut your brain "+
  "learned to ignore them. I wonder what else do we learned to ignore.\"",
  showLine: function() {
    textFont("Arial");
    textStyle(ITALIC);
    textSize(20);
    textLeading(25);
    rectMode(CENTER);
    fill(0,0,0,255-scene1LineTransparency);
    noStroke()
    rect(width/2,height/2,this.bg.width/2,this.bg.height/2);
    fill(255,255,255,255-scene1LineTransparency);
    text(this.line, width/2,height/2);
  }

}



var Scene2 = {
  bg:[],
  character:"",
  randomClouds: [],
  flower:"",
  scar:"",
  feather:[],
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
  music: "",
  line:"\"You can see them,\naren't you?\"",
  showLine: function() {
    textFont("Arial");
    textStyle(ITALIC);
    textSize(20);
    textLeading(25);
    rectMode(CENTER);
    fill(0,0,0,255-scene2LineTransparency);
    noStroke()
    rect(width/2,height/2,this.character.width/2,this.character.height/2);
    fill(255,255,255,255-scene2LineTransparency);
    text(this.line, width/2,height/2);
  }

}

var Scene3 = {
  bg:[],
  character:"",
  building1:"",
  building2:"",
  building3:"",
  music:"",
  line:"\"Will you remember me?\"",
  showLine: function() {
    textFont("Arial");
    textStyle(ITALIC);
    textSize(20);
    textLeading(25);
    rectMode(CENTER);
    fill(0,0,0,255-scene3LineTransparency);
    noStroke()
    rect(width/2,height/2,this.character.width/2,this.character.height/2);
    fill(255,255,255,255-scene3LineTransparency);
    text(this.line, width/2,height/2);
  },
}

var Scene4 = {
  music:"",
  bg:"",
  money:"",
  dirt1:"",
  dirt2:"",
  graffiti:"",
  bottle1:"",
  fragments:"",
  bat:"",
  bottle2:"",

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
  Scene2.flower = loadImage("images/scene2-flower.png");
  Scene2.scar = loadImage("images/scene2-scar.png");
  Scene2.feather = [loadImage("images/scene2-feather1.png"),
  loadImage("images/scene2-feather2.png"),
  loadImage("images/scene2-feather3.png")];


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
  Scene4.bg = loadImage("images/scene4-background.png");
  Scene4.money = loadImage("images/scene4-money.png");
  Scene4.dirt1 = loadImage("images/scene4-dirt1.png");
  Scene4.dirt2 = loadImage("images/scene4-dirt2.png");
  Scene4.graffiti = loadImage("images/scene4-graffiti.png");
  Scene4.bottle1= loadImage("images/scene4-bottle1.png");
  Scene4.bottle2= loadImage("images/scene4-bottle2.png");
  Scene4.fragments= loadImage("images/scene4-fragments.png");
  Scene4.bat= loadImage("images/scene4-bat.png");


}



function setup() {
  createCanvas(1530,740);
  slider = createSlider(0,300);
  slider.position(0,height-20);

}


// scene 1 variables
var titleTransparency = 0;
var showTitle = false;
var cloudArray;
var scene1LineShowedTime = 0;
var scene1LineTransparency = 0;


// scene 2 variables
var backgroundFrame = 0; // share between scene 2 and 3
var scene2LineShowedTime = 0;
var scene2LineTransparency = 0;
var flowerVisibility = false;
var scarVisibility = false;
var featherVisibility = false;



// scene 3 varibles
// var backgroundFrame
var building1Visibility=false;
var building2Visibility=false;
var building3Visibility=false;
var scene3LineShowedTime = 0;
var scene3LineTransparency = 0;


// scene 4 vars
var scene4MusicPlayed = 1;
var moneyTransparency = 80;



function draw() {
  if (scene4MusicPlayed > 1 && !Scene4.music.isPlaying()){
    Scene4.music.setVolume(0);
  }



  //SCENE1
  if (slider.value() < 100){ // first scene, when slider return a value less than 100

    // looping music
    musicLoop(Scene1.music);


    // Showing images
    imageMode(CENTER);
    background(255);
    image(Scene1.bg,width/2,height/2,Scene1.bg.width/2,Scene1.bg.height/2); // background
    Scene1.cloud(cloudArray); // clouds
    image(Scene1.hand,width/2,height/2+8,Scene1.hand.width/2,Scene1.hand.height/2);// hand

    // title
    noStroke();
    textSize(60);
    textAlign(CENTER);
    fill(0,0,0,titleTransparency);
    textFont("Times New Roman")
    textStyle(NORMAL);
    text("Floaters",width*2/3,height/2);
    textSize(20);
    fill(0,0,0,titleTransparency)
    textStyle(NORMAL);
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

    // Showing the line
    // the algorithm of showing the line:
    // 1) encapsulate a method in the object showing the line
    // create two vars:
    // 1, lineShowedTime , by default is 0, increase 1 when show line is executed
    // 2, lineTransparency, by default is 0 and be the decrease of fill of text and
    // back ground in the showline method. If lineShowedTime reached a certain frameCount
    // it started to increase in a liner manner with lineShowedTime
    Scene1.showLine();
    scene1LineShowedTime += 1;
    if (scene1LineShowedTime>500) {
      scene1LineTransparency = (scene1LineShowedTime-500)*3;
    }



  }


    // Scene2
  else if (slider.value() >= 100 && slider.value() < 200){
    print (mouseX,mouseY);
    musicLoop(Scene2.music);
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

    // showing other components
    // flower
    if (mouseOver(388,500,258,728)){
      noFill();
      stroke(0);
      strokeWeight(3);
      ellipse(mouseX,mouseY,frameCount%50);
      if (mouseIsPressed){
        flowerVisibility = true;
      }
    }
    display(flowerVisibility,Scene2.flower,
    width/2,height/2,2,2);

    // scar
    if (mouseOver(1053,1105,167,246)){ // 1053,1105,167,246
      noFill();
      stroke(0);
      strokeWeight(3);
      ellipse(mouseX,mouseY,frameCount%50);
      if (mouseIsPressed){
        scarVisibility = true;
      }
    }
    display(scarVisibility,Scene2.scar,
    width/2,height/2,2,2);

    // feather
    if (mouseOver(881, 1016,133,231)){ // 881, 1016,133,231
      noFill();
      stroke(0);
      strokeWeight(3);
      ellipse(mouseX,mouseY,frameCount%50);
      if (mouseIsPressed){
        featherVisibility = true;
      }
    }
    display(featherVisibility,Scene2.feather[backgroundFrame],
    width/2,height/2,2,2);

  }


    // Scene3
  else {
    if (building1Visibility && building2Visibility && building3Visibility) {
      if (!Scene1.music.isPlaying() && !Scene2.music.isPlaying()
      && !Scene3.music.isPlaying() && !Scene4.music.isPlaying()){
        Scene4.music.play();
        scene4MusicPlayed += 1;
      }
    }else{
      musicLoop(Scene3.music);
    }

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
    if (mouseOver(0, 841,0,318)){ // 0, 841,0,318
      noFill();
      stroke(0);
      strokeWeight(3);
      ellipse(mouseX,mouseY,frameCount%50);
      if (mouseIsPressed){
        building1Visibility = true;
      }
    }
    display(building1Visibility,Scene3.building1,
    width/2,height/2,2,2);


    if (mouseOver(842,1036,0,205)){ // 842,1036,0,205
      noFill();
      stroke(0);
      strokeWeight(3);
      ellipse(mouseX,mouseY,frameCount%50);
      if (mouseIsPressed){
       building2Visibility = true;
     }
    }
    display(building2Visibility,Scene3.building2,
    width/2,height/2,2,2);


    if (mouseOver(1282,1348,0,393)){  //1282,1348,0,393
      noFill();
      stroke(0);
      strokeWeight(3);
      ellipse(mouseX,mouseY,frameCount%50);
      if (mouseIsPressed){
        building3Visibility = true;
      }
    }
    display(building3Visibility,Scene3.building3,
    width/2,height/2,2,2);


    // character
    image(Scene3.character,width/2,height/2,Scene3.character.width/2,Scene3.character.height/2);


    // if the user find all the elements
    if (building1Visibility && building2Visibility && building3Visibility) {
      showScene4();
      }
    }


    // showing the final image with a fade in effect
    if (slider.value() >= 200 && (Scene4.music.currentTime() >= 15.8 || scene4MusicPlayed > 2)) {
      tint(255,moneyTransparency);
      image(Scene4.bg,width/2,height/2,Scene4.bg.width/2,Scene4.bg.height/2);
      moneyTransparency+=50;
    }


    // code for showing lines
    // scene 2 Line
    if (scarVisibility){
      Scene2.showLine();
      scene2LineShowedTime += 1;
      if (scene2LineShowedTime > 120){
        scene2LineTransparency = (scene2LineShowedTime-120)*3;
      }
    }
    // scene 3 line
    if (building2Visibility){
      Scene3.showLine();
      scene3LineShowedTime += 1;

      if (scene3LineShowedTime > 80){
        scene3LineTransparency = (scene3LineShowedTime-80)*3;
      }
    }

  }



function showScene4() {
  background(255);
  image(Scene4.bg,width/2,height/2,Scene4.bg.width/2,Scene4.bg.height/2);
  if (scene4MusicPlayed <= 2){
    image(Scene4.money,width/2,height/2,Scene4.money.width/2,Scene4.money.height/2);
  }

  // when the music started
  if (Scene4.music.currentTime() > 0.1 && scene4MusicPlayed <= 2) {
    image(Scene4.dirt1,width/2,height/2,Scene4.dirt1.width/2,Scene4.dirt1.height/2);
  }
  if (Scene4.music.currentTime() >= 2.4&& scene4MusicPlayed <= 2) {
    image(Scene4.dirt2,width/2,height/2,Scene4.dirt2.width/2,Scene4.dirt2.height/2);
  }
  if (Scene4.music.currentTime() >= 4.6 && scene4MusicPlayed <= 2) {
    image(Scene4.graffiti,width/2,height/2,Scene4.dirt2.width/2,Scene4.dirt2.height/2);
  }
  if (Scene4.music.currentTime() >= 6.7 && scene4MusicPlayed <= 2) {
    image(Scene4.bottle1,width/2,height/2,Scene4.dirt2.width/2,Scene4.dirt2.height/2);
  }
  if (Scene4.music.currentTime() >= 9 && scene4MusicPlayed <= 2) {
    image(Scene4.fragments,width/2,height/2,Scene4.dirt2.width/2,Scene4.dirt2.height/2);
  }
  if (Scene4.music.currentTime() >= 11.2 && scene4MusicPlayed <= 2) {
    image(Scene4.bat,width/2,height/2,Scene4.dirt2.width/2,Scene4.dirt2.height/2);
  }
  if (Scene4.music.currentTime() >= 13.5 && scene4MusicPlayed <= 2) {
    image(Scene4.bottle2,width/2,height/2,Scene4.dirt2.width/2,Scene4.dirt2.height/2);
  }

}
