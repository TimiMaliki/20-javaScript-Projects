const  days = document.querySelector('.days')
const  hours = document.querySelector('.hours')
const  mins = document.querySelector('.minutes')
const  seconds = document.querySelector('.seconds')


days.innerText = new Date().getDay()
hours.innerText = new Date().getHours()
mins.innerText = new Date().getMinutes()
seconds.innerText = new Date().getSeconds()

