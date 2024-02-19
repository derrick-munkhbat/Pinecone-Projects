const express = require('express')

const app = express()
const port = 3000


app.get('/', (req, res) => {
// const title = 'hello';



  res.json([
    {
        name: "hello"
        // title: title,
        // description: "world",
    },
    ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})