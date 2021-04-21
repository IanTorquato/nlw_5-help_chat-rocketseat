import express from 'express'

import './database'

const app = express()

app.get('/', (request, response) => response.json({ message: 'Hello NLW' }))

app.listen(3333, () => console.log('Server is running on port 3333'))