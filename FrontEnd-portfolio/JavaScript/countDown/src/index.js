const  days = document.querySelector('.days')
const  hours = document.querySelector('.hours')
const  mins = document.querySelector('.minutes')
const  seconds = document.querySelector('.seconds')

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


const giveaway = document.querySelector('.giveaway')

const futureDate = new Date(2025, 4 , 5, 2, 39, 58 )
const year = futureDate.getFullYear()
const day = futureDate.getDay()
const month =  futureDate.getMonth()
const hour = futureDate.getHours()
const min = futureDate.getMinutes()
const sec = futureDate.getSeconds()


giveaway.textContent = `giveaway ends on  ${weekdays[day]}, ${months[month]}, ${year},  ${hour}:${min}am`

