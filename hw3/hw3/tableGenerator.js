
/*
File: tableGenerator.js
GUI Assignment: Interactive Dynamic Table
Raymond Fanini, UMass Lowell Computer Science, Raymond_Fanini@student.uml.edu

Copyright (c) 2022 by Raymond Fanini. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by RF on June 16, 2022 at 12:35 PM

I used https://www.w3schools.com/ website as reference.

*/
// This will call the createTable function

createTable();


// This is the createTable function. This will create the multiplication table
function createTable()
{
	//This gets the value of the html id's
	var start1 = document.getElementById("input1").value;
	var row = document.getElementById("input2").value;
	var start2 = document.getElementById("input3").value;
	var col = document.getElementById("input4").value;
	
	//This variable is used to write the table tag dynamically
	var str = "<table>";
	
	//This will store the result of the multiplication
	var j = 0;
	
	
	//This if statement checks if the numbers are between -50 and 50
	if(parseInt(start1) >= -50 && parseInt(row) <= 50 && parseInt(start2) >= -50 && parseInt(col) <= 50)
	{	
		//This if statement checks if the starting numbers are not grater than the ending numbers 
		if(parseInt(start1) < parseInt(row) && parseInt(start2) < parseInt(col))
		{
			
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
		}
	}
	else
	{
		// This will be display if the number is not between -50 and 50
		str += "<p id = \"error\">The numbers should be between -50 to 50.</p>";
	}
	
	// This if statement will check if the starting number is not greater than the ending number
	if(parseInt(start1) >= parseInt(row) || parseInt(start2) >= parseInt(col))
	{
		str += "<p id = \"error\">The starting number should not be greater than the ending number.</p>";
	}
	
	//This if statement will check if all fields are not empty
	if(start1 == "" || row == "" || start2 == "" || col == "")
	{
		str += "<p id = \"error\"> Make sure the fields are not empty.</p>";
	}
	
	
	//This will write the table tag dynamically
	document.getElementById("table").innerHTML = str;
	

}