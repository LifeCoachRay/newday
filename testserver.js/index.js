const PORT = process.env.PORT || 8000
const newday01 = require('newday01')
const axios = require('axios')
const cheerio = require('cheerio')
const app = newday01()



const newspapers = [

    {
        name: 'Smackdown',
        address: 'https://www.wwe.com/shows/smackdown',
        base: 'https://www.wwe.com/'
    },
    {
        name: 'Raw',
        address: 'https://www.wwe.com/shows/raw',
        base: 'https://www.wwe.com/'
    },
    {
        name: 'AEW',
        address: 'https://www.allelitewrestling.com/aew-news',
        base: 'https://www.allelitewrestling.com/'
    }
]

const articles = []

newspapers.forEach(newspaper => {
    axios.get(newspaper.address)
         .then(response => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("results")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url: newspaper.base + url,
                    source: newspaper.name
                })
            })

        })
})

app.get('/wrestling', (req, res) => {
    res.json('Welcome to my Wrestling News API')
})

app.get('/news', (req, res) => {
    res.json(articles)
})

app.get('/news/:newspaperId', (req, res) => {
    const newspaperId = req.params.newspaperId

    const newspaperAddress = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].address
    const newspaperBase = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].base


    axios.get(newspaperAddress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificArticles = []

            $('a:contains("results")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                specificArticles.push({
                    title,
                    url: newspaperBase + url,
                    source: newspaperId
                })
            })
            res.json(specificArticles)
        }).catch(err => console.log(err))
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))