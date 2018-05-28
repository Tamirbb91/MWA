function isWeekend() {
	const todayDate = new Date();
	const day = todayDate.getDay;
	
	while(day == 6 || day == 0){
		return "weekend";
	}	

	return "weekday";
}