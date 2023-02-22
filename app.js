const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const dittoUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'

app.get('/api/v1/ditto', async (req, res) => {
    let response = await getDittoRequest();
    res.send(response)
})

const getDittoRequest = async () => {
    let response = await axios.get(dittoUrl)
    return mapRequestDitto(response.data)
}

const mapRequestDitto = (data) => {
    let obj = new Object();
    obj.name = data.name
    obj.imageUrl = data.sprites.front_default
    obj.weight = data.weight
    obj.stats = data.stats
    return JSON.stringify(obj)
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})