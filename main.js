void setup() { 
  size(600, 400);
}
var t = 0;
var my = 0;
var ry = 305;
var rpoops = 0;
var rpph = 0; // Poop Pile Height

void draw() {
 background(125, 125, 255);

fill(0,100,0);
textSize(40);
text("Same Excrement, Different Piles.", 10,100);




 // donkey
 // feet
 fill(0, 0, 200);
 rect(120,300, 20, 80);
 rect(210,300, 20, 80);
 rect(180,300, 20, 80);
 rect(150,300, 20, 80);
 //body
 ellipse(175,300,115,50);
 // head
 ellipse(260,280,30,70);
 //neck
 quad(170,325, 170,300, 260,250, 260, 275);
 //ears
 quad(250,260, 255,230, 260,250, 260,245);
 quad(270,260, 265,230, 260,250, 260,245);
 // eye
 fill(0,0,0);
 ellipse(260,270, 10, 10);



 // troph
 fill(75, 100, 75);
 quad(260,375, 240,300, 325,300, 305,375);



 // elephant
 noStroke();
fill(200, 0, 0);
 // feet
 rect(350,300, 20, 80);
 rect(380,300, 20, 80);
 rect(410,300, 20, 80);
 rect(440,300, 20, 80);
 //body
 ellipse(408,300, 116, 100);
 // head
ellipse(350,250, 69, 69);
 // trunk
 quad(320,300, 300,300, 320,240, 340,240);
 // ear
 ellipse(380,245, 40, 70);
 fill(200, 100, 100);
 ellipse(380,245, 20, 50);
 // eye
 fill(0,0,0);
 ellipse(340,240, 10, 10);



 // poop
 fill(0,100,0);
 ellipse(466,ry, 10,10);
 ellipse(115,ry, 10,10);

 if(ry < 375) {
   ry++;
   } else {
     ry = 305;
	 rpoops++;
	}
	rpph = 0;
	for (i = 1; i < rpoops; i++) {
		 ellipse(466+(i%12)*10,375-rpph, 10,10);
		 ellipse(115-(i%12)*10,375-rpph, 10,10);
		if (i%12 == 0) {
			rpph += 10;
		}
	}
   // money
	fill(0,100,0);
	rect(275,my,20,10);
	if (my<300) {
		//my = floor(-9.8*t*t);
		my += 5
		}
	else {
		my = 0;
		}

}




