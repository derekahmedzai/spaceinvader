$(document).ready(function(){

  // globals
  var videoInput = document.getElementById('inputVideo');
  var canvasInput = document.getElementById('inputCanvas');
  
  // start headtracking
  var htracker = new headtrackr.Tracker({calcAngles: true, ui: false, headPosition: false, debug: false });
  htracker.init(videoInput, canvasInput);
  htracker.start();

  // listen to headtracking events
  document.addEventListener('facetrackingEvent', function(event) {

    $('#debug').html('BOOM! IT\'S ' + event.x + ' AND ' + event.y + ' AND ' + event.width + ' TOO.');
    
    // The video input seems to be limited to about 320
    var new_x = (event.x / $('#inputVideo').width()) * $('#debugCanvas').width();
        // And the left/right are inverted.
        new_x = $('#debugCanvas').width() - new_x;
    var new_y = (event.y / $('#inputVideo').height()) * $('#debugCanvas').height();
    $('#thingy').css('left', new_x + 'px');
    $('#thingy').css('top', new_y + 'px');
    
    // How big should it be?
    var scale = event.width / $('#debugCanvas').width() * 50;
    $('#thingy').css('transform', 'scale(' + scale + ', ' + scale + ')');
    $('#thingy').css('-webkit-transform', 'scale(' + scale + ', ' + scale + ')');
  });
});

