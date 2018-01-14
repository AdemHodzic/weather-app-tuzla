$(function(){

	var weather = 'http://api.apixu.com/v1/current.json?key=ef4d5a7221454cd688e170109181301&q=Tuzla';
	
	$.getJSON(weather,function(res){  //Display weather and my city of Tuzla <3
		$(".temperature").html(res.current.temp_c+' <div class="degrees text-primary" style="display:inline;">&#8451</div>');
		console.log(res.current.condition.icon);
		$(".city").html(res.location.name+", "+res.location.country);
	});

	setInterval(function(){
		var date = new Date();
		var hours = (date.getHours()<10)?'0'+date.getHours():date.getHours();
		var minutes = (date.getMinutes()<10)?'0'+date.getMinutes():date.getMinutes();
		var seconds = (date.getSeconds()<10)?'0'+date.getSeconds():date.getSeconds();
		$(".time").html(hours+":"+minutes+":"+seconds);
	}, 1000);

});



