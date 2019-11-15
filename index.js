// imported external / global modules
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const request = require('request')


// let arr = [1,2,3]

// for(let val of arr) {
//     console.log(val);
    
// }

const app = express();
//local module / import
// const getWeather = require ('./lib/getWeather')
// const getWeekWeather = require ('./lib/getWeather')
// use the path of public to start server journey

const routes = require('./routes/routes')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes)

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

// app.get('/', (req, res) => {
//     // let data = await getWeather();
//     // let city = data.list[0].name;
//     // let temp = data.list[0].main.temp;
//     // let wind = data.list[0].wind.speed;
//     // let cloud = data.list[0].clouds.all;
//     // console.log(temp, wind)
//     //{temp, wind, cloud, city}
//     res.render('index');
// });

// app.post('/', async(req, res) =>{
//     let location = req.body.location;
//     let countryCode = req.body.countryCode;

//     let data = await getWeather(location, countryCode);

//     if (data.list[0]){
//         console.log(data.list)
//         let City = data.list[0].name;
//         let Country = data.list[0].sys.country;
//         let Icon = data.list[0].weather[0].icon;
//         let Description = data.list[0].weather[0].description;
//         let Temperature = data.list[0].main.temp;
//         let Wind = data.list[0].wind.speed;
    
        
        

//         res.render('index', {data: {City, Country, Description, Temperature, Wind}});
//     } else {
//         res.render('index', {err: "The location you entered doesn't exist!"});
//     }
// });

// app.post('/', async(req, res) =>{
//     let location = req.body.location;
//     let countryCode = req.body.countryCode;

//     let data = await getWeekWeather(location, countryCode);

//     if (data.list[0]){
//         console.log(data.list)
//         let City = data.list[0].name;
//         let Icon = data.list[0].weather[0].icon;
//         let Description = data.list[0].weather[0].description;
//         let Temperature = data.list[0].main.temp;
//         let Wind = data.list[0].wind.speed;
    
        
        

//         res.render('fivedays', {data: {City, Description, Temperature, Wind}});
//     } else {
//         res.render('fivedays', {err: "The location you entered doesn't exist!"});
//     }
// });



app.listen(3000, () => {
    console.log('server on 3000.')
});