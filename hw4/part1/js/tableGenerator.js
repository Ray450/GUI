
/*
File: tableGenerator.js
GUI Assignment: Interactive Dynamic Table
Raymond Fanini, UMass Lowell Computer Science, Raymond_Fanini@student.uml.edu

Copyright (c) 2022 by Raymond Fanini. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by RF on June 23, 2022 at 10:35 PM

I used https://www.w3schools.com/ website as reference.

I used the following link as reference and to download the jquery-plugin:

https://jqueryvalidation.org/
*/
// This will call the createTable function

createTable();
$(document).ready(function () 
{
	// This will check if the starting number is not greater than the ending number
	jQuery.validator.addMethod("limit",
        function (value, element, param) 
		{
            return parseInt(value) > parseInt($(param).val());
		}, "The starting number should not be greater than the ending number.");
	

	//This is the validator that will check if the user enters the correct values
    $('form').validate(
		{
			rules: {
				input1: {
					required: true,
					number: true,
					min: -50,
					max: 50,
				},
				input2: {
					required: true,
					number: true,
					min: -50,
					max: 50,
					limit: '#input1'
				},
				input3: {
					required: true,
					number: true,
					min: -50,
					max: 50,
				},
				input4: {
					required: true,
					number: true,
					min: -50,
					max: 50,
					limit: '#input3'
				}
			},
			//This will display the massenge for the user
			messages: {
				input1: {
					required: "Make sure the fields are not empty.",
					number: "Make sure you enter an integer",
					min: "The numbers should be between -50 to 50.",
					max: "The numbers should be between -50 to 50."
				},
				input2: {
					required: "Make sure the fields are not empty.",
					number: " Make sure you enter an integer",
					min: "The numbers should be between -50 to 50.",
					max: "The numbers should be between -50 to 50."
				},
				input3: {
					required: "Make sure the fields are not empty.",
					number: "Make sure you enter an integer",
					min: "The numbers should be between -50 to 50.",
					max: "The numbers should be between -50 to 50."
				},
				input4: {
					required: "Make sure the fields are not empty.",
					number: "Make sure you enter an integer",
					min: "The numbers should be between -50 to 50.",
					max: "The numbers should be between -50 to 50."
				}
			},
			
			//If there is no messege the submitHandoler function will call the createTable function
			submitHandler: function() {
				createTable();
				return false;
			},
	});
});

// This is the createTable function. This will create the multiplication table
function createTable()
{
	//This gets the value of the html id's
	var start1 = $("#input1").val();
	var row = $("#input2").val();
	var start2 = $("#input3").val();
	var col = $("#input4").val();
	
	//This variable is used to write the table tag dynamically
	var str = "<table>";
	
	//This will store the result of the multiplication
	var j = 0;

	str += "<tr> <td id = \"first_cell\"> </td>";
	//This for loop creates the first row
	for(var i = parseInt(start2); i <= parseInt(col); i++)
	{
			
			str += "<td>";
			str = str + i.toString();
			str += "</td>";
	}
	
	//This for loop creates the other rows with the result of the multiplication 
	str += "</tr>";
	for(var i = parseInt(start1); i <= parseInt(row); i++)
	{
		str += "<td>";
		str = str + i.toString();
		str += "</td>";
		for(var f = parseInt(start2); f <= parseInt(col); f++)
		{
			j = f * i;
			str += "<td>";
			str = str + j.toString();
			str += "</td>";
		}
		str += "</tr>";
	}
	str+="</table>";
	str = str;
	
	//This will write the table tag dynamically
	$("#table").html(str);
}
