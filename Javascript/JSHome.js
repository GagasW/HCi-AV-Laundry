function DropdownMenu() {
	document.getElementById('dropdownContainer').classList.toggle("show");
}

/*buat bikin jam mau gua update lagi jgn di apa apain wkwk*/
/*function updateClock() {
    var now = new Date();
        months = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];
        time = now.getHours() + ':' + now.getMinutes();

        date = [now.getDate(), 
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    document.getElementById('times').innerHTML = [date, time].join(' / ');

    setTimeout(updateClock, 1000);
}
updateClock();*/

window.onclick = function(trigger){
	if (!trigger.target.matches('.dropbtn')) {
		var dropdownContainer = document.getElementById('dropdownContainer');
		if(dropdownContainer.classList.contains('show')){
			dropdownContainer.classList.remove('show');
		}
	}
}