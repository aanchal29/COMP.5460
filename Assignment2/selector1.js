//changes website background
$(document).ready(function(){
var color = $('#list').val();
$('body').css('background',color);

$('#list').change(function(){
var color = $('#list').val();
$('body').css('background',color);
});
});

$(document).ready(function(){
$("footer").on("click", function() {
    $("footer").toggleClass('red');
});
});
