
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
const items = document.querySelectorAll('.deadline-format h4')
const deadLine = document.querySelectorAll('.deadline')


const futureDate = new Date(2025, 4 , 25, 2, 39, 58 )
const year = futureDate.getFullYear()
const day = futureDate.getDay()
const month =  futureDate.getMonth()
const hour = futureDate.getHours()
const min = futureDate.getMinutes()
const sec = futureDate.getSeconds()
const date = futureDate.getDate()


giveaway.textContent = `giveaway ends on  ${weekdays[day]}, ${date} ${months[month]}, ${year},  ${hour}:${min}am`

const futureTime = futureDate.getTime()
// console.log(futureTime)

 const getRemainingTime  = () => {
    const today = new Date().getTime()
    
    let dT;

    if(futureDate.getDate() < 10){
       dT =  today - futureTime
    }else{
      dT = futureTime - today
    }
    

 

     const aDay = 24 * 60 * 60 * 1000
     const anHour = 60 * 60 * 1000
     const aMinute = 60*1000
     const aSecond = 1000

     let days = dT / aDay
     days = Math.floor(days)

     let hours = (dT % aDay) / anHour
     hours = Math.floor(hours)

     let minutes = (dT % anHour) / aMinute
     minutes = Math.floor(minutes)

     let seconds = (dT % aMinute) / aSecond
     seconds = Math.floor(seconds)

      const myDateArray = [days , hours , minutes , seconds]

       const format = (item) => {
            if(item < 10){
                return item = `0${item}`
            }else{
              return item
            }
       }

      

      items.forEach((item , index) => {
               item.innerHTML = format(myDateArray[index])
      })

      if(dT < 0){
        clearInterval(countDown)
        deadLine.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
      }
           
 }

 const countDown = setInterval( getRemainingTime , 1000)
  getRemainingTime()

