$(document).ready(function() {
    $("#search").click(function() {
		var place = $("#where-to").val();
		var checkIn = $("#check-in").val();
		var checkOut = $("#check-out").val();
		var guests = $("#total-guests").val();
		confirm(guests + " guests traveling to " + place + " , check-in: " + checkIn + ", check-out: " + checkOut);
	});
});