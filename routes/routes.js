const {Router} = require('express');
const router = Router();

const getWeather = require ('../lib/getWeather')
const getWeekWeather = require('../lib/getWeekWeather')

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/fivedays', (req,res) =>{
    res.render('fivedays')
})



router.post('/', async(req, res) =>{
    let location = req.body.location;
    let countryCode = req.body.countryCode;

    let data = await getWeather(location, countryCode);
    console.log(data.list[0])
    if (data.list[0]){
        console.log(data.list)
        let City = data.list[0].name;
       let Country = data.list[0].sys.country;
        let Icon = data.list[0].weather[0].icon;
        let Description = data.list[0].weather[0].description;
        let Temperature = data.list[0].main.temp;
        let Wind = data.list[0].wind.speed;
    
        
        

        res.render('index', {data: {City, Country, Description, Temperature, Wind}});
    } else {
        res.render('index', {err: "The location you entered doesn't exist!"});
    }
});

// console.log(getWeekWeather)
router.post('/fivedays', async(req, res) =>{
    let location = req.body.location;
    let countryCode = req.body.countryCode;
    let data = await getWeekWeather(location, countryCode);

    if (data.list){
        console.log(data.list)
        let City = data.city.name;
        let Country = data.city.country;
        // let Icon = data.list[0].weather[0].icon;
        let Description = data.list[0].weather[0].description;
        let Temperature = data.list[0].main.temp;
        let Wind = data.list[0].wind.speed;
    
        // Country, Description, Temperature, Wind
        

        res.render('fivedays', {data: {City, Country, Description, Temperature, Wind}});
    } else {
        res.render('fivedays', {err: "The location you entered doesn't exist!"});
    }
});

module.exports = router;