export const countdown = () => {
    const daysElement = document.getElementById('days').querySelector('p:last-child');
    const hoursElement = document.getElementById('hours').querySelector('p:last-child');
    const minutesElement = document.getElementById('minutes').querySelector('p:last-child');
    const secondsElement = document.getElementById('seconds').querySelector('p:last-child');

    const updateCountdown = () => {
        let seconds = parseInt(secondsElement.textContent);
        let minutes = parseInt(minutesElement.textContent);
        let hours = parseInt(hoursElement.textContent);
        let days = parseInt(daysElement.textContent);

        seconds--;

        if (seconds < 0) {
            // Restart Seconds and subtract a minute
            seconds = 59; 
            minutes--;
            if (minutes < 0) {
                // Restart minutes and subract an hour
                minutes = 59; 
                hours--;
                if (hours < 0) {
                    // Restart hours and subtract a day
                    hours = 23; 
                    days--;
                    if (days < 0) {
                        // Stop the counter when it reaches 0
                        clearInterval(interval); 
                        days = 0;
                        hours = 0;
                        minutes = 0;
                        seconds = 0;
                    }
                }
            }
        }

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    const interval = setInterval(updateCountdown, 1000);

};
