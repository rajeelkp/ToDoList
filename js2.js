$(document).ready(function (){


        var i=0,k=0;

        var obj = JSON.parse(localStorage.getItem("text"));

   function show(){
            var res="<table class='tab'><tr><th> DO </th><th>At</th></tr> ";


            for(i in obj.todo)
            {
              res+= "<tr><td id='drag' draggable='true' ondragstart='drag("+i+")'>" + obj.todo[i].do +"</td><td>  " + obj.todo[i].at + "</td><td> <a href='#' onclick='del("+i+")'> X </a> </td></tr> ";
            }

            res+="</table>";

            $('showitem').HTML=res;
            text=JSON.stringify(obj);
           localStorage.setItem("text", text);}


show();









});
