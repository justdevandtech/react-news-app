const express  = require('express');
const cors = require('cors');
const axios  = require('axios');
const dotenv = require('dotenv');
dotenv.config()
const PORT = process.env.PORT

const app = express();
app.use(cors());

const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEWS_API_KEY}`;
app.get('/', async(req, res) => {
    try {
        const response = await axios.get(url)
        const data = await response.data
        res.json(data)
    } catch (error) {
        console.log(error);
    }

})
app.listen(PORT, () =>{
    console.log('SERVER RUNNING ON PORT ' +PORT);
})