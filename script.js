function reverseIt(){
	var inputString = document.getElementById("inputTextString").value;
    var splitString = inputString.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
	str = "The reverse of the text that you entered: " + joinArray;
    document.getElementById("output").innerHTML = str;
}

function multiples(){
	var inputNum = document.getElementById("inputNumString").value;
	str="<table><tr>"

	for (i=1; i<=20; i++)
	{
		if (i%4==0)
		{
			str = "</tr>"+ str + "<td>" + inputNum*i.toString() + "</td>"+ "<tr>"
		}else{
			str =  str + "<td>" + inputNum*i.toString() + "</td>"
			}
	}

	str + "</tr></table>"

    document.getElementById("output2").innerHTML = str;
}


var tabulate = function (data,columns) {
		  var table = d3.select('#output3').append('table')
			var thead = table.append('thead')
			var tbody = table.append('tbody')

			thead.append('tr')
			  .selectAll('th')
			    .data(columns)
			    .enter()
			  .append('th')
			    .text(function (d) { return d })

			var rows = tbody.selectAll('tr')
			    .data(data)
			    .enter()
			  .append('tr')

			var cells = rows.selectAll('td')
			    .data(function(row) {
			    	return columns.map(function (column) {
			    		return { column: column, value: row[column] }
			      })
		      })
		      .enter()
		    .append('td')
		      .text(function (d) { return d.value })
			table.attr("id","presidents")
		  return table;
	    }


        d3.csv('presidents.csv', function(data)
                {
                   var columns = ["Name", "Height", "Weight"]
                   tabulate(data,columns)
                 })




