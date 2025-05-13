const month = document.querySelector(".monthDisplay")
const year = document.querySelector(".yearDisplay")
const time = document.querySelector(".timeDisplay")


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];


const calender = new Date()
const monthDisplay =  calender.getMonth()
const yearDisplay = calender.getFullYear()
const timeDisplay = calender.getTime()
const hours = calender.getHours()
const mins = calender.getMinutes()
const secs = calender.getSeconds()
const dayDisplay = calender.getDay()



month.innerHTML = `${weekdays[dayDisplay]} ${months[monthDisplay] } ${monthDisplay}` 
year.innerHTML = yearDisplay
time.innerHTML = `${hours}:${mins}:${secs} ${hours >= 12 ? "PM" : "AM"}`

