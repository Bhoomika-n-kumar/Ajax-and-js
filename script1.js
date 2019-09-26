
var count = 0;
var response= [] ;

var demo = document.getElementById('demo').innerHTML;
var select = document.getElementById("mySelect");
select.setAttribute('style','margin-top:10px;width:100%;height:30px;background-color:#d7dbe0;')
var button = document.createElement('button');
button.id = "myButton";
button.appendChild(document.createTextNode("Submit"));
button.addEventListener("click", function() { count++ ; displayCapital()});
button.setAttribute('style','border:none;width:6%;color:white;height:30px;border-radius:5px;outline:none;background-color:#0373fc;margin-top:10px;margin-left:45%;')
document.body.appendChild(button);

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
xhttp.send();
  
  
  xhttp.onload = function() 
  {

    if (this.status == 200) 
    {
      response = JSON.parse(this.responseText);
      //console.log(JSON.parse(this.responseText));
 
      for(var i=0;i<response.length;i++)
      {
        var data = response[i].name;
        //console.log(data)
     	var option = document.createElement("option");
     	option.appendChild(document.createTextNode(data));
     	option.value = data;
     	select.appendChild(option);
      }
    }
   }    

var capDiv = document.getElementById('capDiv');
var capitalsUl = document.getElementById('capitals');
capitalsUl.style = "padding:10px;list-style-type:none;"

function displayCapital()
{
	for(var i=0;i<response.length;i++)
     {
        var data1 = response[i].name;
        var strUser = select.options[select.selectedIndex].value;      
        if(strUser == response[i].name)
        {
            var capital = response[i].capital;
            var li = document.createElement('li');
            li.id = "capLi" ;
            var capitalsLi = document.getElementById("capLi");
            capDiv.setAttribute('style', 'width:100%;background-color:lightblue;margin-top:10px;');
            li.appendChild(document.createTextNode("The capital of " + response[i].name + " is " + capital));
            capitalsUl.appendChild(li);
            //capP.innerHTML = "The capital of " + "<q>" + strUser + "</q>" + " is " + "<b>" + capital + "</b>";
        }
      }   
}
 
