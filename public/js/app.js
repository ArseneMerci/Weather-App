console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#m1')
const message2 = document.querySelector('#m2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    message1.textContent = 'loading...'
    message2.textContent = ''
    fetch(`/weather?address=${location}`).then(response =>{
        response.json().then(data=>{
        if(data.error) {
           return message1.textContent = data.error
        }
        message1.textContent = `Location : ${data.location}`
        message2.textContent = `The Weather is ${data.forecast.descr} with ${data.forecast.temp} degrees and outside feels like ${data.forecast.feelsLike} degrees, it is ${data.forecast.isDay}`
    })
})
})