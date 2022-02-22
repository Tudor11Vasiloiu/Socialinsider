// connection at port 8080
const api_url = "https://app.socialinsider.io/api";
const axios = require('axios').default;

const { response } = require('express');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.listen(8080, () => console.log('Listening at 8080'));

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'pug');


const axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer API_KEY_TEST',
    }
};

app.post('/brands', (req, res) => {
    return axios.post(api_url, {
        jsonrpc: "2.0",
        method: "socialinsider_api.get_brands",
        params: {
            projectname: "API_test"
        },
        id: 1
    }, axiosConfig).then(response => {
        res.send(response);
    }).catch(error => {
        //catch
    });
});


app.post('/profile', (req, res) => {
    return axios.post(api_url, {
        jsonrpc: "2.0",
        method: "socialinsider_api.get_brands",
        params: {
            projectname: "API_test"
        },
        id: 1
    }, axiosConfig).then(response => {
        res.send(response);
    }).catch(error => {
        //catch
    });
});

app.get('/', (req, res) => {
    res.render('index');
  });

function showData(someData){
    let tab = `<tr>
        <th>Brand Name</th>
        <th>Total Profiles</th>
        <th>Total Fans</th>
        <th>Total Engagement</th>
    </tr>`

    someData.get_brands();
    for(let br of data.get_brands()){
        let br_dat = br.get_profile_data();

        let total_profiles = 0;
        
        for(let i of br_dat.profiles){
            total_profiles += 1;
        }

        tab += `<tr>
        <th>${br_dat.brand_name}</th>
        <th>${total_profiles}</th>
        </tr>`
    }
}