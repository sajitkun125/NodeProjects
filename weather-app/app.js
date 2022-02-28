const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=5716eaa16be98fc4cc51063c5206a3e8&query=37.8267,-122.4233'
request({url: url,json:true},(error,response)=>{
  
    const data= response.body.current
    console.log("it is currently " + data.temperature + " degree out. Feels like is a "+data.feelslike + " degree out")
})