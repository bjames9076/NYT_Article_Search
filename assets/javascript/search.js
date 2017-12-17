$document.ready(function() {

//function to display info

function displayInfo() {


var searchTerm = $("#searchTerm").val().trim();//**search box name assigned by front end team
var retrieveNum = $(this).attr("#numberToRetrieve");
var startYear = $(this).attr("#startYear");
var endYear = $(this).attr("#endYear");
console.log(searchTerm);

// var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear  + "0101&end_date=" + endYear + "0101&api-key=0de3f6939654420a8dc32451a92e48f4"
// // http://api.nytimes.com/svc/search/v2/articlesearch.json?q=star+wars&begin_date=20160101&end_date=20170101&api-key=0de3f6939654420a8dc32451a92e48f4
// var Year = $("#id").

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

	url += '?' + $.param({
	  'api-key': "0de3f6939654420a8dc32451a92e48f4",
	  'q': searchTerm,
	  'begin_date': startYear + "0101",
	  'end_date': endYear + "0101"
	});
	
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);

	  for (var i = 0; i <retrieveNum; i++ ) {

	  	articleCounter++;

	  	var wellSection = $("<div>");
	  	wellSection.addClass("well");
	  	wellSection.attr("id", "articleWell-" + articleCounter);
	  	$("#wellSection").append(wellSection);

	  }


	}).fail(function(err) {
	  throw err;
	});



//retrive number
var articleCounter = 0;


for (var i = 0; i < numArticle )




}//displayInfo function closing



});//document.ready closing


