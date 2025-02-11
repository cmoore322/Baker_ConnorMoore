// add in draggable.
//make squares per seats w/loop
//baker is some action 


//drag and find position? 
//click and get position? 

function myCoolFunction(x,y,z) {
  return x+y/z; 
}
myCoolFunction(2,3,4)

// A $( document ).ready() block.
$( document ).ready(
  function() {
    console.log( "ready!" );
  
  for(i = 0; i <7; i++)
    {
      //do stuff
      console.log(i); 
      $("#firstRow").append('<div class="seat">SEAT</div>');
    
    }

    
    
//   for dragg see: https://jqueryui.com/draggable/#events 
  $('#secondRow').draggable(); 
    
  $("#podium").on('click', function(){
    
     $("#podium").animate({left: '250px'});
    
  })
   
    
    
  }
);
function makeDraggable(elementId) {
            const element = document.getElementById(elementId);
            let offsetX = 0, offsetY = 0, mouseX = 0, mouseY = 0;

            element.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e.preventDefault();
                mouseX = e.clientX;
                mouseY = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e.preventDefault();
                offsetX = mouseX - e.clientX;
                offsetY = mouseY - e.clientY;
                mouseX = e.clientX;
                mouseY = e.clientY;
                element.style.top = (element.offsetTop - offsetY) + "px";
                element.style.left = (element.offsetLeft - offsetX) + "px";
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }

        // Make each table draggable
        makeDraggable("table1");
        makeDraggable("table2");
        makeDraggable("table3");
        makeDraggable("table4");


$(document)
  .on(
    'click', 
      (event)=> 
      {
        // alert(event.target.id); 
        let $clicked = $('#'+event.target.id );  
        // alert($clicked.position().top);
        
        console.log(
          event.target.id, 
          $('#'+event.target.id)
          .position()
          .left);
})