var cards = [];
var questionsList;
var currQuestionIndex = 0;

for(intIndex=1;intIndex<25;intIndex++)
{
	cards[intIndex] = [];
}

cards[1]["background"] = "blue";
cards[2]["background"] = "jade";
cards[3]["background"] = "yellow";
cards[4]["background"] = "blue";
cards[5]["background"] = "red";
cards[6]["background"] = "jade";
cards[7]["background"] = "yellow";
cards[8]["background"] = "blue";

cards[9]["background"] = "jade";
cards[10]["background"] = "blue";
cards[11]["background"] = "red";
cards[12]["background"] = "jade";
cards[13]["background"] = "yellow";
cards[14]["background"] = "red";
cards[15]["background"] = "blue";
cards[16]["background"] = "jade";

cards[17]["background"] = "red";
cards[18]["background"] = "yellow";
cards[19]["background"] = "jade";
cards[20]["background"] = "blue";
cards[21]["background"] = "jade";
cards[22]["background"] = "blue";
cards[23]["background"] = "yellow";
cards[24]["background"] = "red";

function singleGuess(strType)
{
	// Get the current question
	q = questionsList[currQuestionIndex];
	console.log(strType);
	strClass = q.class;

	jQuery('.box').each(function()
	{
		var t = jQuery(this);
		var img;

		if (strType == "yes")
		{
			// We hide ones that don't have our class
			if (!(t.hasClass(strClass)))
			{
				img = t.find('img');
				img.addClass('dead');
			}
		}
		else
		{
			if ((t.hasClass(strClass)))
			{
				img = t.find('img');
				img.addClass('dead');
			}
		}

	});
}

$(document).ready(function(){

// Click on main christmas card and flip it. 

	$( ".main_container" ).on( "click", function() {
	   
	   	if ($(this).hasClass('active')){
	   		return false;
	   	} else {
	   		$(this).addClass('active');
			var randomNumber = Math.floor(Math.random() * 24) + 1;
			var imgName = "image-" + randomNumber + ".png";
			$('.main-card img').attr('src', 'img/' + imgName);
			$('#theFront').hide();
			strCSS = "background-" + cards[randomNumber]["background"];
			console.log(strCSS);
			$('.main-card').addClass(strCSS);
		}
	}
);

// Link class and questions
//
// {question: "do they have pink cheeks?", class: "cheeks" }

questionsList = [{
		question: "Do they have pink cheeks?", 
		class: "cheeks"
	}, {
		question: "Do they have a hat?", 
		class: "hat"
	}, {
		question: "Do they have a collar?", 
		class: "collar"
	}, {
		question: "Do they have a scarf?", 
		class: "scarf"
	}, {
		question: "Do they have glasses?", 
		class: "glasses"
	}, {
		question: "Do they have a red nose?", 
		class: "nose"
	}, {
		question: "Is it a female character?", 
		class: "female"
	}, {
		question: "Is the background yellow?", 
		class: "background-yellow"
	}, {
		question: "Is the background red?", 
		class: "background-red"
	}, {
		question: "Is the background blue?", 
		class: "background-blue"
	}, {
		question: "Is the background green?", 
		class: "background-green"
	}, {
		question: "Do they have black eyes?", 
		class: "cheeks"
	}, {
		question: "Is it an animal?", 
		class: "animal"
	}];


// Generate questions and activate arrows 

function createHandler(className) {
return function(evt) {

	}
}

// flip correct cards based on className
qIndex = 0;

questionsList.forEach(function(element) { 
	qIndex++;
	$('#banner-options').append('<p id="question' + qIndex + '">' + element.question + '</p>'); 
});



$('.nav-button').on('click', function() {
	$('#banner-options p').hide();
	if ($(this).hasClass('right-button')) {
		currQuestionIndex += 1;
	} else {
		currQuestionIndex -= 1;
	}

	$('#banner-options p:nth-child(' + (currQuestionIndex + 1) + ')').show();
});

function askQuestion() { var currQuestionIndex = questionsMap[currQuestionIndex]; $("no-button").click(function() { $("." + currQuestionIndex.class).hide()}); }

function askQuestion() { var currQuestionIndex = questionsMap[currQuestionIndex]; $("yes-button").click(function() { $("." + currQuestion.class).show()}); }


});