
var count = 0;
var response= [] ;

var demo = document.getElementById('demo').innerHTML;
var button = document.createElement('button');
button.id = "myButton";
button.appendChild(document.createTextNode("Submit"));
button.addEventListener("click", function() { count++ ; displayCapital()});
document.body.appendChild(button);

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
xhttp.send();
  
  
  xhttp.onreadystatechange = function() 
  {

    if (this.status == 200) 
    {
      response = JSON.parse(this.responseText);
      console.log(JSON.parse(this.responseText));
 
      for(var i=0;i<response.length;i++)
      {
        var data = response[i].name;
        console.log(data)
     	var select = document.getElementById("mySelect");
     	var option = document.createElement("option");
     	option.appendChild(document.createTextNode(data));
     	option.value = data;
     	select.appendChild(option);
     	//console.log(option.value); 
      }
    }
   }    

function displayCapital()
{
	for(var i=0;i<response.length;i++)
     {
        var data1 = response[i].name;
        var select1 = document.getElementById("mySelect");
        var strUser = select1.options[select1.selectedIndex].value;      
        if(strUser == response[i].name)
        {
            var capital = response[i].capital;
            //console.log(capital);
            document.getElementById('capital').innerHTML = "The capital of " + "<q>" + strUser + "</q>" + " is " + "<b>" + capital + "</b>";
        }
      }   
}
 
