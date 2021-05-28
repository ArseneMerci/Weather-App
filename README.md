# Weather App
## This is an app that displays weather condition in different places(Web server version)

### Using web server
### Installing Dependencies

Run
`npm install` or `npm i`

End Point

```
/weather?address=gitarama
```
Response
```json
{
"forecast": {
    "descr": [
        "Light rain shower"
            ],
    "temp": 14,
    "feelsLike": 14
            },
"location": "Muhanga, Southern, Rwanda",
"address": "gitarama"
}
```