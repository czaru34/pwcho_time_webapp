let rootElement = document.getElementById('root')
var timezones = [
    {city: 'New_York', timezone: 'America/New_York' },
    {city: 'Lublin', timezone: 'Europe/Warsaw' }, 
    {city: 'Sydney', timezone: 'Australia/Sydney' } 
]

timezones.map((timezone) => {
    rootElement.innerHTML += `<div id="${timezone.city}"> ${timezone.city}</div></br>`
})

var run = setInterval(() => timezones.map(timezone => {
    getReq(timezone)
}), 1000)

function getReq(timezone) {
    console.log(timezone)
    $.post('http://0.0.0.0:8080/getTime', {timezone:timezone.timezone}, (response) => {
        console.log(response)
        document.getElementById(timezone.city).innerHTML = timezone.city + '</br>' + response.time
    })
}