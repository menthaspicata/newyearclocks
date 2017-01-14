timeend= new Date();
timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);

function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);

    timeDay=today;
    timeHour=thour;
    timeMin=tmin;
    timeSec=tsec;

 	document.getElementById('days').innerHTML=timeDay;
	document.getElementById('hours').innerHTML=timeHour;
	document.getElementById('minutes').innerHTML=timeMin;
	document.getElementById('seconds').innerHTML=timeSec;  



   setTimeout("time()",1000);
}