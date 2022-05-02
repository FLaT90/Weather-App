const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors())

/**
 * devuelve informacion del clima
 */
app.get('/weather', (req, res) => {

    const data = {

        weather: [
            {
                id: 802,
                main: "Clouds"
            }
        ],
        base: "stations",
        main: {
            temp: 31,
            temp_min: 29,
            temp_max: 33,
            humidity: 73
        },
        wind: {
            speed: 1.5
        },
        sys: {
            type: 1,
            id: 8590,
            country: "CO"
        },
        name: "Cali",
        cod: 200




    }

  res.status(200).json(data)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})