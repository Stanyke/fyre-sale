const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const indexRoutes = require('./routes/index')
require('dotenv').config()
require('./utils/db')


app.use(cors())
app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({ limit: '100mb', extended: true }))
indexRoutes(app)

const port = process.env.PORT || 5000

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})