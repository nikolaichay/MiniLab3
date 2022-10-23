import e from "express";
console.log('Server working')

import express from 'express'
import request from 'request'

const PORT = 5000

const APP = express()
APP.use(express.json())


APP.get('/starship', (req, res)=>{
    request(
        'https://swapi.dev/api/starships',
        (err, response, body) => {
            if (err) return res.status(500).send({ message: err })

            return res.send(body)
        }
    )
})

APP.get('/planet', (req, res)=>{
    request(
        'https://swapi.dev/api/planets',
        (err, response, body) => {
            if (err) return res.status(500).send({ message: err })

            return res.send(body)
        }
    )
})

APP.get('/people', (req, res)=>{
    request(
        'https://swapi.dev/api/people',
        (err, response, body) => {
            if (err) return res.status(500).send({ message: err })

            return res.send(body)
        }
    )
})

APP.listen(PORT, () => console.log('Server started on PORT ' + PORT))