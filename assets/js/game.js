var myMovies = ['Pulp Fiction', 'Fight Club', 'The Matrix', 
'Back to The Future', 'The Lion King', 'Finding Memo', 
'Lord of the Rings', 'City of God','American History X',
'Forrest Gump']

var rand = myMovies[Math.floor(Math.random() * myMovies.length)];

console.log(rand)

var movieLength = rand.length

console.log(movieLength)

var underScore = "__ "

console.log(underScore + underScore)

var movieTiles = [];

for (var i = 0; i < rand.length; i++) {
	movieTiles.push("__ ");
	
}

document.onkeypress = function(key_dtl) {
key_dtl = key_dtl || window.event; 
var uni_code = key_dtl.keyCode || key_dtl.which; 
var key_name = String.fromCharCode(uni_code); 
document.getElementById("tiles").innerHTML = movieTiles; 
}


document.onkeyup = function(event){
	
	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	
}








