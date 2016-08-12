/*
window.onload = function() {
 
    alert( "welcome" );
 
};
*/

/* Find the nucleus */

var distance;

$(document).ready(function($){
(function() {
    
    //var mX, mY, distance,
    var mX, mY,
        $distance = $('#distance span'),
        $element  = $('#element');

    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }

    $(document).mousemove(function(e) {  
        mX = e.pageX;
        mY = e.pageY;

        distance = calculateDistance($element, mX, mY);

   
        $("#image1").transition({ 
            opacity: '0.9', 
            x: distance, 
            y: distance, 
        }, 5);
        
        $("#image2").transition({ 
            opacity: '0.9', 
            x: distance * 1.5, 
            y: distance + 1.5, 
        }, 5);

        $("#image3").transition({ 
            opacity: '0.9', 
            x: distance * 1.8, 
            y: distance + 1.8, 
        }, 5);

        $("#image4").transition({ 
            opacity: '0.9', 
            x: distance * 2.3, 
            y: distance * 2.3, 
        }, 5);

        $("#image5").transition({ 
            opacity: '0.9', 
            x: distance * 2.8, 
            y: distance * 2.8, 
        }, 5);

        $("#image6").transition({ 
            opacity: '0.9', 
            x: distance * - 1.5, 
            y: distance * - 1.5, 
        }, 5);
        
        $("#image7").transition({ 
            opacity: '0.9', 
            x: distance * - 1.9, 
            y: distance * - 1.9, 
        }, 5);

        $("#image8").transition({ 
            opacity: '0.9', 
            x: distance * - 2.3, 
            y: distance + - 2.3, 
        }, 5);

        $("#image9").transition({ 
            opacity: '0.9', 
            x: distance * - 2.6, 
            y: distance * - 2.6, 
        }, 5);

        $("#image10").transition({ 
            opacity: '0.9', 
            x: distance * - 3, 
            y: distance * - 3, 
        }, 5);

        //eventually add up to 48

        
        // var imageArray = ["#image1", "#image2", "#image3", "#image4", "#image5", "#image6", "#image7",
        //  "#image8", "#image9", "#image10", "#image11", "#image12", "#image13", "#image14", 
        //  "#image15", "#image16", "#image3", "#image4", "#image5", "#image6", "#image7",
        //  "#image17", "#image18", "#image19", "#image20", "#image21", "#image22", "#image23", 
        //  "#image24", "#image25", "#image26", "#image27", "#image28", "#image29", "#image30",
        //  "#image31", "#image32", "#image33", "#image34", "#image35", "#image36", "#image37",
        //   "#image38", "#image39", "#image40"];
          

        // for (var i = 0; i < imageArray.count; i++) {

        //     var image = imageArray[i];

        //     $(image).transition({
        //         opacity: '0.9',
        //         x: distance + i * 10, 
        //         y: distance + i * 10,
        //     }, 20);
        // }

        $distance.text(distance);         
    });

})();

/*
$(function() {
$("#element").mouseout( function() {
//$("#image01").transition({ opacity: '0.9', x: '-300px', y: '-300px'}, 1000);}); });
$("#image01").transition({ opacity: '0.9', x: distance + 50, y: distance + 100}, 1000);}); });
$(function() {
$("#element").mouseover( 
function(){
$("#image01").transition({ opacity: '1', x: '0px', y: '0px'}, 500);}); });

$(function() {
$("#element").mouseout( function() {
//$("#image02").transition({ opacity: '0.9', x: '-150px', y: '-320px'}, 1000);}); });
$("#image02").transition({ opacity: '0.9', x: distance * 2, y: distance}, 1000);}); });
$(function() {
$("#element").mouseover( 
function(){
$("#image02").transition({ opacity: '1', x: '0px', y: '0px'}, 500);}); });

$(function() {
$("#element").mouseout( function() {
//$("#image03").transition({ opacity: '0.9', x: '0px', y: '-300px'}, 1000);}); });
$("#image03").transition({ opacity: '0.9', x: distance + 100, y: distance + 150}, 1000);}); });
$(function() {
$("#element").mouseover( 
function(){
$("#image03").transition({ opacity: '1', x: '0px', y: '0px'}, 500);}); });
*/
});
