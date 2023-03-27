var websiteName='BINGE';
var x=0;
var speed=350;
//writes BINGE
function typeWriterEffect(){
	if(x<websiteName.length){
		document.getElementById("title").innerHTML+=websiteName.charAt(x);
		x++;
		setTimeout(typeWriterEffect,speed);
	}
}
//writes chatchphrase
var catchPhrase="Just one more episode...";
var i=0;
var speed2=55;;
function typeWriterEffect2(){
	if(i<catchPhrase.length){
		document.getElementById("catchPhrase").innerHTML+=catchPhrase.charAt(i);
		i++;
		setTimeout(typeWriterEffect2,speed2);
	}

}
//writes group members
var y =0;
speed3=500;
var teamNames=new Array("Group members:","Chamikara Kariyapperuma ","Suharsha Fernando","Asiri Ekanayake"); //group member names in array
function typeWriterEffect3(){
	if (y<teamNames.length){
		document.getElementById("names").innerHTML+=teamNames[y]+"<br>";
		y++;
		setTimeout(typeWriterEffect3,speed3);

	}
}

window.setTimeout(function(){
	document.getElementById("titleContainer");
	typeWriterEffect();
	
},1000);
window.setTimeout(function(){
	typeWriterEffect2();
	
},2500);
window.setTimeout(function(){
	typeWriterEffect3();
},4000);


window.setTimeout(function(){

  window.location.href = "MainPage.html";

}, 8000); //4 seconds after all page elements have been loaded.