
var app=angular.module("todo", ['ngDraggable']);

var i=0,j=0;

allowDrop=function(a) {
      a.preventDefault();

  }



app.controller("initial", function(){
  if(localStorage.length!==0)
{    this.o=localStorage.getItem('text');
  obj=JSON.parse(this.o);
}
else{
  var text='{ "todo" :  [ { "do":"Wake Up", "at":" 5:30 AM"}, { "do":" Go to office Early ! ", "at" : "7:00 AM" }, '+
      ' {"do":"Finish the Job !", "at":"5:30 PM"}  ] }' ;
    localStorage.setItem("text", text);
  obj=JSON.parse(text);

}


});


app.controller('inputcontroller', function(){
  //  this.hideit=true;
   this.todolist={};
   this.addto=function(todolist)
 {
    obj.todo.push(this.todolist);
     this.todolist={};
     set=function(){

       text=angular.toJson(obj);
       localStorage.setItem("text", text);

     }
     set();
 }
});

app.controller('bodycontrol',function($scope){
  this.ob=obj;

$scope.del=function(index) {
  obj.todo.splice(index,1);
  text=angular.toJson(obj);
  localStorage.setItem("text", text);

  set();
};

$scope.onDragComplete=function(data,evt){
        console.log("drag success, data:", data);
    }
$scope.onDropComplete1=function(data,evt){console.log(data,evt);
    }
$scope.drag=function(index){
          alert("hello");
        }


});
