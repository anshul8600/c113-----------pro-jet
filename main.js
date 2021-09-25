function setup(){

    c1 = createCanvas(650, 500);
    c1.center();
    v1 = createCapture(VIDEO);
    v1.hide();
}
tintcolor='';
function draw(){

    image (v1, 0, 0, 650, 500); 
    tint(tintcolor);
    fill ("red");
    circle(25, 25, 50);
    fill ("blue");
    circle(625, 25, 50);
    fill ("green");
    circle(625, 475, 50);
    fill ("yellow")
    circle(25, 475, 50);
    fill ("purple");
    rect(49, 15, 550, 20);
    fill ("cyan");
    rect(615, 50, 20, 400);
    fill ("chartreuse");
    rect(49, 465, 550, 20);
    fill ("orange");
    rect(15, 50, 20, 400);
    








































































































}
function filtertint(){
tintcolor = document.getElementById("colorname").value;
}
function take_snapshot(){
    save("me.png");
}

