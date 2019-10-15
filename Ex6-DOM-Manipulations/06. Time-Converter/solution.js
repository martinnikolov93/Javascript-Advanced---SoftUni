function attachEventsListeners() {

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    function convertDays (){
        let days = daysInput.value;
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    }

    function convertHours (){
        let hours = hoursInput.value;
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        daysInput.value = days;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    }

    function convertMinutes (){
        let minutes = minutesInput.value;
        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;

        daysInput.value = days;
        hoursInput.value = hours;
        secondsInput.value = seconds;
    }

    function convertSeconds (){
        let seconds = secondsInput.value;
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        daysInput.value = days;
        hoursInput.value = hours;
        minutesInput.value = minutes;
    }

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);
}