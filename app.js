$(document).ready(function() {
    $("#search").click(function() {
		var place = $("#where-to").val();
		var checkIn = $("#check-in").val();
		var checkOut = $("#check-out").val();
		var guests = $("#total-guests").val();
		confirm(guests + " guests traveling to " + place + " , check-in: " + checkIn + ", check-out: " + checkOut);
	});

	$("#logo").on("mouseenter",function(){ 
		$(this).fadeOut(300,function(){
			$(this).fadeIn(300);
		});
	});

	$(".thumbnail").click(function(){
        $(this).animate({
            opacity: '0.5',
            height: '+=40px',
            width: '+=40px'
        });
        $(this).animate({
            opacity: '1',
            height: '-=40px',
            width: '-=40px'
        });
    });
    
});