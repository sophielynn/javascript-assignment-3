// Do your work in this file.

// div view under body
var view = document.createElement("div");
view.className = 'view';    
document.body.appendChild(view);

// div grass under view
var grass = document.createElement("div");
grass.className = 'grass';    
view.appendChild(grass);

// div sun under view
var sun = document.createElement("div");
sun.className = 'sun';    
view.appendChild(sun);

// 5 divs of ray under sun
var i = 0;
while (i < 5){
    var ray = document.createElement("div");
    ray.className = 'ray-' + (i + 1);    
    sun.appendChild(ray);
    i++;     
}

// div mountain under view
var mountain = document.createElement("div");
mountain.className = 'mountain';    
view.appendChild(mountain);

// div mountain-top under mountain
var mountainTop = document.createElement("div");
mountainTop.className = 'mountain-top';    
mountain.appendChild(mountainTop);

// 3 divs of mountain-caps under mountain-top
var i = 0;
do {
    var mountainCap = document.createElement("div");
    mountainCap.className = 'mountain-cap-' + (i + 1);    
    mountainTop.appendChild(mountainCap);
    i++;
} while (i < 3);