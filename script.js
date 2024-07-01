let time, day;
const today = new Date()


time = document.getElementById('time')
function gettingTime () { 
    const today = new Date()
    time.innerHTML = today.toLocaleTimeString()
}
setInterval(gettingTime, 1000)

const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
day = document.getElementById('day')
day.innerHTML = weekDay[today.getDay()]