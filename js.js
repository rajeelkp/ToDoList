function object(first, last) {
    this.do = first;
    this.at = last;

}
var i=0;

var text='{ "todo" :  [ { "do":"Wake Up", "at":" 5:30 AM"}, { "do":" Go to office Early ! ", "at" : "7:00 AM" }, '+
    ' {"do":"Finish the Job !", "at":"5:30 PM"}  ] }' ;

var obj = JSON.parse(text);

function show(){

    var res="<table class='tab'><tr><th> DO </th><th>At</th></tr> ";


    for(i in obj.todo)
    {
      res+= "<tr><td> " + obj.todo[i].do +"</td><td>  " + obj.todo[i].at + "</td><td> <a href='#' onclick='del("+i+")'> X </a> </td></tr> ";
    }

    res+="</table>";

    document.getElementById('showitem').innerHTML=res;
  }




function adder(){

 try
      {

         if(document.getElementById("adder").value=="") throw "String is Empty";
    if(document.getElementById("date").value=="") throw "String is Empty";
    obj.todo[++i]= new object();
      obj.todo[i].do=document.getElementById("adder").value;
      obj.todo[i].at=document.getElementById("date").value;
      show();


  }

    catch(err) {
           document.getElementById("demo").innerHTML = "Input is " + err;
       }

// if(document.getElementById("adder").value!="" && document.getElementById("date").value!="")
//       {}
}





function del(j)
{
alert("Item No "+j+ " : " +  obj.todo[j].do  + " is completed !");
obj.todo.splice(j, 1);;
show();
}
