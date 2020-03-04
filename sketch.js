//Replace with the start frame of state A
let startA = 0;
//Replace with the end frame of state A
let endA = 30;
//Replace with the start frame of state B
let startB = 30;
//Replace with the end frame of state B
let endB = 60;
let didPlay = false;
let anim
let lottie;

let x = 0;

let animData;
let soundA;

console.log ("hi im here");

function preload() {
  animData = loadJSON('flower-button.json');
  soundA = loadSound('on.wav');
  soundB = loadSound('off.wav');
}

function setup() {
    console.log ("hi im here set up");
  createCanvas(300, 300);
  background(0, 0, 0, 0);
  lottie = createDiv();
  console.log (lottie);
  let params = {
    container: lottie.elt,
    loop: false,
    autoplay: false,
    animationData: animData,
    renderer: 'svg',
  };
  anim = bodymovin.loadAnimation(params);
  lottie.mousePressed(animate);
  lottie.position(0, 0);
  lottie.size(400, 400);
  anim.setSpeed(1);
}

// function draw() {
//   fill(255, 50);
//   ellipse(random(width),random(height), 32);
// }

function animate() {
    console.log ("hi im here animate");
  soundA.play();
  let targetFrames = [0, 0];
  if (!didPlay) {
    didPlay = true;
    targetFrames = [startA, endA];
  } else {
    soundA.stop();
    soundB.play();
    didPlay = false;
    targetFrames = [startB, endB]
  }
  anim.playSegments([targetFrames], true);


}