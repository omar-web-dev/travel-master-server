////////////////// step 01 \\\\\\\\\\\\\\\\\\\\\\\\\
// 1. goto node express (website)
// 2. create folder name (cmd mkdir <file name>
// 2.1 cd <folder name> goto previous folder
// 3. npm init -y (-y if you have all default setup or you can setup strep by strep)
// 4. create a entry index.js file 
// 5. npm i express cors (instal express and cors)

////////////////// step 02 \\\\\\\\\\\\\\\\\\\\\\\\\
// 1. create a API 
// 2. API listen 
// 3. sent request to path name

////////////////// step 03 (example) \\\\\\\\\\\\\\\\\\\\\\\\\
// const express = require('express') 
// const cors = require('cors')
// const app = express()
// const port =process.env.PORT || 5000
// app.use(cors())

// app.get('/', (req, res) => { (rote file show this content)
//   res.send('travel master is a Home page') // it show 
// })

// app.listen(port, () => {     ////start port//
//   console.log(`Example app listening on port ${port}`)
// })

////////////////// step 04 \\\\\\\\\\\\\\\\\\\\\\\\\
// ---------------- your build a api -------------- \\
// data/hotels.json
// ---------------- you get a api -------------- \\
// app.get('/hotels', (req, res) => {
//     res.send(require('./data/hotels.json'))
//   })

////////////////// step 05 \\\\\\\\\\\\\\\\\\\\\\\\\
// -------------upload your data -----------------
//1. vercel (and answer) // .......yeah upload your site

////////////////// step 06 \\\\\\\\\\\\\\\\\\\\\\\\\
//--------------- update server --------------\\
// vercel --pord
