var ourReq = new XMLHttpRequest();
ourReq.open('GET','http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/topstories/v2/home.json?api-key=79cd1a1cb68b45d5b29fe5805edee97a');
var ourData;
ourReq.onload=function()
{
	 ourData=JSON.parse(ourReq.responseText);
console.log(ourData);
	renderh(ourData);
	
};

function renderh(data)
{
	//console.log(data.results.length);
	var table=document.getElementById("mytable");
	var row = table.insertRow(0);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	var cell3=row.insertCell(2);
	cell1.innerHTML="<th>Title</th>";
	cell2.innerHTML="<th>Abstract</th>";
	cell3.innerHTML="<th>Des_Facet</th>";
	
	for(i=data.results.length-1;i>-1;i--)
	{
		var table=document.getElementById("mytable");
		var row = table.insertRow(1);
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		var cell3=row.insertCell(2);
		cell2.innerHTML=data.results[i].abstract;
		cell3.innerHTML=data.results[i].des_facet;
		cell1.innerHTML='<a href="'+data.results[i].short_url+'">'+data.results[i].title+'</a>';
		// console.log(data.results[i].byline);
		// console.log("hello");
	}
}
function rend(data)
{
	var table=document.getElementById("mytable1");
	var row = table.insertRow(0);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	var cell3=row.insertCell(2);
	cell1.innerHTML="<th>Title</th>";
	cell2.innerHTML="<th>Abstract</th>";
	cell3.innerHTML="<th>Des_Facet</th>";
	for(i=data.length-1;i>-1;i--)
	{
		var table=document.getElementById("mytable1");
		var row = table.insertRow(1);
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		var cell3=row.insertCell(2);
		cell2.innerHTML=data[i].abstract;
		cell3.innerHTML=data[i].des_facet;
		cell1.innerHTML='<a href="'+data[i].short_url+'">'+data[i].title+'</a>';
		// console.log(data.results[i].byline);
		// console.log("hello");
	}
}
	function rend1(data)
{
	var table=document.getElementById("mytable2");
	var row = table.insertRow(0);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	var cell3=row.insertCell(2);
	cell1.innerHTML="<th>Title</th>";
	cell2.innerHTML="<th>Abstract</th>";
	cell3.innerHTML="<th>Des_Facet</th>";
	for(i=data.length-1;i>-1;i--)
	{
		var table=document.getElementById("mytable2");
		var row = table.insertRow(1);
		var cell1=row.insertCell(0);
		var cell2=row.insertCell(1);
		var cell3=row.insertCell(2);
		cell2.innerHTML=data[i].abstract;
		cell3.innerHTML=data[i].des_facet;
		cell1.innerHTML='<a href="'+data[i].short_url+'">'+data[i].title+'</a>';
		// console.log(data.results[i].byline);
		// console.log("hello");
	}
}
function sort1()
{
	
	var c=ourData.results.sort(function(a, b){
		return Date.parse(a.published_date) - Date.parse(b.published_date)
	});
	rend1(c);
}

function sort2()
{
	
	var c=ourData.results.sort(function(a, b){
		return Date.parse(a.updated_date) - Date.parse(b.updated_date)
	});
	rend1(c);
}
function sort3()
{
	
	var c=ourData.results.sort(function(a, b){
		return Date.parse(a.created_date) - Date.parse(b.created_date)
	});
	rend1(c);
}
function filter()
{
var d=document.getElementById("inp").value;
var b=ourData.results.filter(function(a){
return (a.section===d)
});
console.log(b);
rend(b);
}

document.getElementById('btn').addEventListener("click", filter);
document.getElementById('btn1').addEventListener("click", sort1);
document.getElementById('btn2').addEventListener("click", sort2);
document.getElementById('btn3').addEventListener("click", sort3);

ourReq.send()
