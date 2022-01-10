var width = $(window).width();
var height = $(window).height();

var xa = -55;
var ya = -32;
var xb = -55;
var yb = 2;

var across = Math.ceil(width/59) + 1;
var down = Math.ceil(height/59) + 1;

for(var j=0; j<down; j++) {
  
  for(var i=0; i<across; i++) {
    
    var $hex =       $(document.createElement('div'));
    $hex.addClass('hex');
    $hex.html('<div class="tri r-0"></div>'+
    '<div class="tri r-60"></div>'+
    '<div class="tri r-120"></div>'+
    '<div class="tri r-180"></div>'+
    '<div class="tri r-240"></div>'+
    '<div class="tri r-300"></div>');
  
    if(i%2 === 0) {
      $hex.css({
        top: j*68+ya+'px',
        left: xa+(i*59)+'px'
      });
    } else {
      $hex.css({
        top: j*68+yb+'px',
        left: xb+(i*59)+'px'
      });
    }
  
    $('body').append($hex);
  }
}
