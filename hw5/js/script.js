
/*
File: tableGenerator.js
GUI Assignment: Interactive Dynamic Table
Raymond Fanini, UMass Lowell Computer Science, Raymond_Fanini@student.uml.edu

Copyright (c) 2022 by Raymond Fanini. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by RF on June 30, 2022 at 10:40 AM

I used https://www.w3schools.com/ website as reference.

I used the following link as reference and to download the jquery-plugin:

https://jqueryvalidation.org/

https://jqueryui.com/

*/


var letters = "";
var ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";
var score = 0;
$(document).ready(function () {
	// This will be used to sumit the tiles
	$('#sumit_tiles').validate({
		submitHandler: function() {
          scrambleGame();
        },
		
    });
	scrambleGame();
});

// This is the scrambleGame function. This will be used for the scramble game
function scrambleGame()
{
	//This fucntion is used to drag the tiles
	$( function() {
		for (var i = 0; i < 7; i++) 
		{
			$( "#Scrabble_Tile_" + i ).draggable({
				revert: "invalid"
			});
		}
	});
	
	var n = 0;
	
	
	//This algorithm is used to drop the tiles and increase the score
	$(function(){
		for(var i = 0; i < 15; i++)
		{
			$( "#Drop_Tile"  + i).droppable({
				drop: function( event, ui ) {
					if(n < 7)
					{
						score += ScrabbleTiles[letters[n]]["value"];
						n++;
					}
				}
			});
		}
	});


	// This algorithm will generate random tiles. 
	var str = "";
	str += '<div>';
    for (var i = 0; i < 7; i++) {
		var index = parseInt(Math.random() * ch.length);
		var total = 0;
		var find_letter = true;
		
		// This algorithm will be use to makesure that the program doesn't display a 
		// tile when there program runs out of a letter
		while(ScrabbleTiles[ch[index]]["number-remaining"] <= 0 && find_letter == true)
		{
			index = parseInt(Math.random() * ch.length);
			
			if(ScrabbleTiles[ch[index]]["number-remaining"] >= 7)
			{
				total=0;
			}
			else
			{
				find_letter = false;
			}
			total+=ScrabbleTiles[ch[index]]["number-remaining"];
		}
		
		// This algorithm will load the images of the tiles
		if(index == 26)
		{
			str += 
					"<img id='Scrabble_Tile_" + i + "' class = 'Scrabble_Tiles' src='img/Scrabble_Tiles/Scrabble_Tile_Blank.jpg' /></img>" 
        }
		else 
		{
			
			str +=
					"<img id='Scrabble_Tile_" + i + "' class = 'Scrabble_Tiles' src='img/Scrabble_Tiles/Scrabble_Tile_" + ch[index] + ".jpg' />" + 
					"</img>";
		}
		
		if(ScrabbleTiles[ch[index]]["number-remaining"] > 0)
		{
			ScrabbleTiles[ch[index]]["number-remaining"] -= 1;
		}
		
		letters += ch[index];
		
		
    }
	
	
	// This algorithm will be used to create the div tags to drop the tiles. 
    str += '</div>';
	
	var str1 = "";
	
	for(var i = 0; i < 15; i++)
	{
		str1 += "<div id = 'Drop_Tile" + i + "' class='Table ui-widget-header'></div>";
	}
	
	
	
	
	// This algorithm will create a table to display the remaining letters.
	
	var str2 = "";
	str2 += "<table><tr>";
	for (var i = 0; i < 3; i++)
	{
		str2 += "<tr>";
		for (var f = 0; f < 9; f++)
		{
			str2 += "<td>" + ch[f + i*9] + ": " + ScrabbleTiles[ch[f + i*9]]["number-remaining"] + "</td>";
		}
		str2 += "</tr>";
	}
	str2 += "</tr></table>";
	
	
	
	
	// This will create the HTML tags.
	
    $("#tile_holder").html(str);
	
	$("#one_line_sample").html(str1);
	
	$("#ScrabbleTiles").html(str2);
	
	$("#Score").html("<p>Score: " + score + "</p>");
}


