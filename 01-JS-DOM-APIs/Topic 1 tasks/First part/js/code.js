var aMovie = {
	"id": 1,
	"title":"Funny People",
	"year":"2009",
	"released":"2009-04-29T00:00:00.0Z",
	"genre":"Comedy, Drama",
	"director": 1,
	"actors": [1, 2],
	"plot":"When seasoned comedian George Simmons learns of his terminal, inoperable health condition, his desire to form a genuine friendship causes him to take a relatively green performer under his wing as his opening act.",
	"poster":"http://ia.media-imdb.com/images/M/MV5BMTMxNDQ5MTA5MF5BMl5BanBnXkFtZTcwMzUyMDUwMg@@._V1_SX300.jpg",
};
var anotherMovie = {
	"id": 2,
	"title":"Fight Club",
	"year":"1999",
	"released":"1999-10-15T00:00:00.0Z",
	"genre":"Drama",
	"director": 2,
	"actors": [3, 4],
	"plot":"An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...",
	"poster":"http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
};

var movieThree = {
"id":3,
"title":"Godzilla",
"year":"2014",
"released":"2001-05-24T00:00:00.0Z",
"genre":"Action, Adventure, Sci-Fi",
"director":3,
"actors":"Aaron Taylor-Johnson, CJ Adams, Ken Watanabe, Bryan Cranston",
"plot":"The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.",
"poster":"http://ia.media-imdb.com/images/M/MV5BMTQ0ODgzNjg2MV5BMl5BanBnXkFtZTgwNDkxMzc3MDE@._V1_SX300.jpg",
"imdbRating":"6.5",
};

var aDirector = {
	"id": 1,
	"name": "Judd Apatow"
};
var anotherDirector = {
	"id": 2,
	"name": "David Fincher"
};

var directorThree = {
"id": 3,
"name":"Gareth Edwards"
};
var anActor = {
	"id": 1,
	"name": "Adam Sandler"
};
var anotherActor = {
	"id": 2,
	"name": "Seth Rogen"
};
var actor3 =
{
 "id": 3,
 "name": "Brad Pitt"
}
var actor4 =
{
 "id": 4,
 "name": "Edward Norton"
}

var data = {
	"movies": [aMovie, anotherMovie, movieThree],
	"actors": [anActor, anotherActor, actor3, actor4],
	"directors": [aDirector, anotherDirector]
}

$( document ).ready(function() {
 populateHtml ();
});




function dinamicMovieGenerator (_movie)
{
 var _stringToChain= "";
 
				_stringToChain+="<div><img class='imgMov' src=" + _movie.poster + "><h3>" + _movie.title + "</h3>";        
         _stringToChain+="<p>" + _movie.plot + "</p>";
         _stringToChain+="<p>" + _movie.genre + "</p>";        
        _stringToChain+= "</div>";

 return _stringToChain;
}


function populateHtml ()
{
var _stringToPrint= "";
for (var i=0; i<data.movies.length; i++)
{
 _stringToPrint+= dinamicMovieGenerator(data.movies[i]);

}
$("#magicBox").html(_stringToPrint);
}

